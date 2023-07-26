import { fetcher } from "../utils/fetcher.ts";
import { toBlogPost } from "../utils/transform.ts";
import type { Context } from "../accounts/wordpress.ts";
import type { BlogPost, PostListParams } from "../types.ts";

/**
 * @title WordPress - List Blog Posts
 * @description Use this function to list blog posts from a WordPress site.
 */
const blogPostListLoader = async (
  props: PostListParams,
  _req: Request,
  ctx: Context,
) => {
  const listQuery = "_embed=wp:featuredmedia";

  const qs = new URLSearchParams(
    Object.entries(props).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>),
  );

  const [list, meta] = await fetcher<BlogPost[]>(
    ctx,
    `/posts?${qs}&${listQuery}}`,
  );

  const posts = list.map((post: BlogPost) => {
    return toBlogPost(post);
  });

  return {
    metadata: meta,
    data: posts,
  };
};

export default blogPostListLoader;
