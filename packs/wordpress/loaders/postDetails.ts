import { fetcher } from "../utils/fetcher.ts";
import { toBlogPost } from "../utils/transform.ts";
import type { Context } from "../accounts/wordpress.ts";
import type { BlogPost, PostDetailsParam } from "../types.ts";

/**
 * @title WordPress - Get Blog Post
 * @description Use this function to get a blog post from a WordPress site.
 */
const blogPostDetailsLoader = async (
  props: PostDetailsParam,
  _req: Request,
  ctx: Context,
) => {
  if (!props.id) return;

  const [res] = await fetcher<BlogPost>(ctx, `/posts/${props.id}`);

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
