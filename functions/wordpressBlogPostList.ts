import { Account as ConfigWordpress } from "../packs/wordpress/accounts/wordpress.ts";
import { createClient } from "../blog/wordpress/client.ts";
import { toBlogPost } from "../blog/wordpress/transform.ts";
import type { LoaderFunction } from "$live/types.ts";
import type { LiveState } from "$live/types.ts";
import type { BlogPosting } from "../blog/types.ts";

export interface Props {
  /**
   * @title Per Page
   * @description The number of posts to retrieve per page.
   * @default 10
   */
  perPage: number;
  /**
   * @title Page
   * @description The page number to retrieve.
   * @default 1
   */
  page: number;
}

/**
 * @title WordPress - List Blog Posts
 * @description Use this function to list blog posts from a WordPress site.
 */
const blogPostListLoader: LoaderFunction<
  Props,
  BlogPosting[] | null,
  LiveState<{ configWordpress: ConfigWordpress }>
> = async (_req, ctx, props) => {
  const { configWordpress } = ctx.state.global;
  const client = createClient(configWordpress);

  const list = await client.post.list({
    per_page: props.perPage,
    page: props.page,
  });

  const posts = list.map((post) => {
    return toBlogPost(post);
  });

  return {
    data: posts,
  };
};

export default blogPostListLoader;
