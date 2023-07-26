/**
 * WordPress REST API Response Schema for a Single Post
 */
export interface BlogPost {
  /** The post ID */
  id: number;
  /** The date of the post in ISO 8601 format (e.g., "2023-07-25T12:34:56") */
  date: string;
  /** The GMT/UTC date of the post in ISO 8601 format */
  date_gmt: string;
  /** The last modified date of the post in ISO 8601 format */
  modified: string;
  /** The GMT/UTC last modified date of the post in ISO 8601 format */
  modified_gmt: string;
  /** The post slug (e.g., "sample-post") */
  slug: string;
  /** The status of the post (e.g., "publish", "draft", "private", etc.) */
  status: string;
  /** The post type (e.g., "post", "page", etc.) */
  type: string;
  /** The URL of the post */
  link: string;
  /** The post title */
  title: {
    rendered: string;
  };
  /**
   * The rendered post content (HTML format)
   * @property {boolean} protected - Whether the post content is password-protected or not (optional)
   */
  content: {
    rendered: string;
    protected?: boolean;
  };
  /**
   * The rendered post excerpt (HTML format)
   * @property {boolean} protected - Whether the post excerpt is password-protected or not (optional)
   */
  excerpt: {
    rendered: string;
    protected?: boolean;
  };
  /** The author ID of the post */
  author: number;
  /** The ID of the featured media (e.g., image) associated with the post (optional) */
  featured_media?: number;
  /** An array of category IDs to which the post belongs */
  categories: number[];
  /** An array of tag IDs associated with the post */
  tags: number[];
  // Add more properties as needed, depending on your specific WordPress configuration
}

/**
 * WordPress REST API Response Schema for a List of Posts
 * More info: https://developer.wordpress.org/rest-api/reference/posts/
 */
export interface PostListParams {
  /** The number of posts to retrieve per page */
  per_page?: number;
  /** The page number to retrieve */
  page?: number;
  /** Limit result set to posts with one or more specific slugs. */
  slug?: string;
}

export interface PostDetailsParam {
  /**
   * @title Post ID
   * @description The ID of the post to retrieve.
   */
  id: string;
}