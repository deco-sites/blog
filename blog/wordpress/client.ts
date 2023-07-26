import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import { BlogPost, PostListParams } from "./types.ts";
import { Account as ConfigWordpress } from "../../packs/wordpress/accounts/wordpress.ts";

export const createClient = ({
  domain = "https://s-qjyn4nbp62jtl.eu1.wpsandbox.org",
  ...params
}: Partial<ConfigWordpress> = {}) => {
  const { username, applicationPassword } = params;

  const fetcher = <T>(
    endpoint: string,
    method: "GET",
    data?: Record<string, unknown>,
  ) => {
    try {
      return fetchAPI<T>(`${domain}/wp-json/wp/v2/${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${applicationPassword}`)}`,
        },
        body: data ? JSON.stringify(data) : undefined,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const listPosts = async (params: PostListParams) => {
    const qs = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, string>),
    );
    const endpoint = `posts?${qs}`;
    return await fetcher<BlogPost[]>(endpoint, "GET");
  };

  const getPostById = async (id: string) => {
    const endpoint = `posts/${id}`;
    const post = await fetcher<BlogPost>(endpoint, "GET");
    return post;
  };

  return {
    post: {
      list: listPosts,
      get: getPostById,
    },
  };
};
