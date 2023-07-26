import { Account as ConfigWordpress } from "../packs/wordpress/accounts/wordpress.ts";
import { createClient } from "../blog/wordpress/client.ts";
import { toBlogPost } from "../blog/wordpress/transform.ts";
import type { LoaderFunction } from "$live/types.ts";
import type { LiveState } from "$live/types.ts";
import type { BlogPosting } from "../blog/types.ts";

export interface Props {
  /**
   * @title Post ID
   * @description The ID of the post to retrieve.
   */
  id: string;
}

/**
 * @title WordPress - List Blog Posts
 * @description Use this function to list blog posts from a WordPress site.
 */
const blogPostDetailsLoader: LoaderFunction<
  Props,
  BlogPosting | null,
  LiveState<{ configWordpress: ConfigWordpress }>
> = async (_req, ctx, props) => {
  const { configWordpress } = ctx.state.global;
  const client = createClient(configWordpress);

  const res = await client.post.get(props.id);

  if (!res) {
    return {
      data: null,
      status: 404,
    };
  }

  const post = toBlogPost(res);

  return {
    data: post,
  };
};

export default blogPostDetailsLoader;
