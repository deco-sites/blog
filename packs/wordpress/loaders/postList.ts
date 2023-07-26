import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import { toBlogPost } from "../utils/transform.ts";
import type { Context } from "../accounts/wordpress.ts";
import type { PostListParams, BlogPost } from "../types.ts";

/**
 * @title WordPress - List Blog Posts
 * @description Use this function to list blog posts from a WordPress site.
 */
const blogPostListLoader = async (props: PostListParams, _req: Request, ctx: Context) => {
  const { configWordpress: config } = ctx;

  const qs = new URLSearchParams(
    Object.entries(props).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>),
  );
  
  const list = await fetchAPI<BlogPost[]>(
    `${config!.domain}/wp-json/wp/v2/posts?${qs}`
  );

  const posts = list.map((post) => {
    return toBlogPost(post);
  });

  return {
    data: posts,
  };
};

export default blogPostListLoader;
