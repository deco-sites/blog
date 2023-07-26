import * as WP from "https://raw.githubusercontent.com/johnbillion/wp-json-schemas/2117b51650c9a662803e74182edf06af9bd327f7/packages/wp-types/index.ts";

export type BlogPost = WP.WP_REST_API_Post;
export type Category = WP.WP_REST_API_Category;
export type Tag = WP.WP_REST_API_Tag;
export type User = WP.WP_REST_API_User;
export type Comment = WP.WP_REST_API_Comment;

export type ResponseMetadata = {
  total: number | null;
  totalPages: number | null;
  status: number;
};

/**
 * WordPress REST API Response Schema for a List of Posts
 * More info: https://developer.wordpress.org/rest-api/reference/posts/
 */
export interface PostListParams {
  /**
   * @title Posts Per Page
   * @description The number of posts to retrieve per page
   */
  per_page?: number;
  /**
   * @title Page
   * @description The page number to retrieve
   */
  page?: number;
  /**
   * @title Slug
   * @description Limit result set to posts with one or more specific slugs.
   */
  slug?: string;
  /**
   * @title  Tag ID
   * @description Limit result set to items with specific terms assigned in the tags taxonomy.
   */
  tags?: number;
  /**
   * @title Category ID
   * @description Limit result set to items with specific terms assigned in the categories taxonomy.
   */
  categories?: number;
}

export interface PostDetailsParam {
  /**
   * @title Post ID
   * @description The ID of the post to retrieve.
   */
  id: string;
}
