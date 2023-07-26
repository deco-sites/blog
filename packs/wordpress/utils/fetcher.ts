import { fetchSafe } from "deco-sites/std/utils/fetch.ts";
import { ResponseMetadata } from "../types.ts";
import { Context } from "../accounts/wordpress.ts";

/**
 * @title toNum
 * @description Convert a string to a number.
 */
function toNum(s: string | null): number | null {
  return typeof s === "string" ? +s : s;
}

/**
 * @title WordPress - Fetcher
 * @description Use this function to fetch data from a WordPress site.
 */
export async function fetcher<T>(
  ctx: Context,
  path: string,
  options?: RequestInit,
): Promise<[T, ResponseMetadata]> {
  const { configWordpress: config } = ctx;

  const baseUrl = config?.wordpressComDomain
    ? `https://public-api.wordpress.com/wp/v2/sites/${config.wordpressComDomain}`
    : config?.wordpressApiUrl + "/wp/v2";

  const resp = await fetchSafe(baseUrl + path, options);
  return [
    (await resp.json()) as T,
    {
      total: toNum(resp.headers.get("x-wp-total")),
      totalPages: toNum(resp.headers.get("x-wp-totalpages")),
      status: resp.status,
    },
  ];
}
