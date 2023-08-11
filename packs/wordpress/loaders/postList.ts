import { fetcher } from "../utils/fetcher.ts";
import { toBlogPost } from "../utils/transform.ts";
import type { Context } from "../accounts/wordpress.ts";
import type { BlogPost, PostListParams } from "../types.ts";
import type { BlogPosting } from "../../../blog/types.ts";

/**
 * @title WordPress - List Blog Posts
 * @description Use this function to list blog posts from a WordPress site.
 */
const blogPostListLoader = async (
  props: PostListParams,
  _req: Request,
  ctx: Context,
): Promise<BlogPosting[] | null> => {
  const listQuery = "_embed=wp:featuredmedia,author";
  const fieldsQuery = props.fields ? `_fields=${props.fields}` : "";

  const qs = new URLSearchParams(
    Object.entries(props).reduce((acc, [key, value]) => {
      if (value !== undefined && key !== "fields") {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>),
  );

  const [list] = await fetcher<BlogPost[]>(
    ctx,
    `/posts?${fieldsQuery}&${qs}&${listQuery}`,
  );

  const posts = list.map((post: BlogPost) => {
    return toBlogPost(post);
  });

  return posts;
};

export default blogPostListLoader;
