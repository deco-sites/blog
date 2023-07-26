import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import { toBlogPost } from "../utils/transform.ts";
import type { Context } from "../accounts/wordpress.ts";
import type { PostDetailsParam, BlogPost } from "../types.ts";

/**
 * @title WordPress - Get Blog Post
 * @description Use this function to get a blog post from a WordPress site.
 */
const blogPostDetailsLoader = async (
  props: PostDetailsParam,
  _req: Request,
  ctx: Context
) => {
  const { configWordpress: config } = ctx;

  const res = await fetchAPI<BlogPost>(
    `${config!.domain}/wp-json/wp/v2/posts/${props.id}`
  );

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
