import { BlogPosting, ImageObject } from "../../../blog/types.ts";
import { BlogPost as BlogPostWordpress } from "../types.ts";

export const toBlogPost = (post: BlogPostWordpress): BlogPosting => {
  return {
    "@type": "BlogPosting",
    "@id": post.id.toString(),
    headline: post.title.rendered,
    image: post.featured_media
      ? ({
        "@type": "ImageObject",
        url: post.featured_media.toString(),
      } as ImageObject)
      : undefined,
    datePublished: post.date,
    dateModified: post.modified,
    articleBody: post.content.rendered,
    url: post.link,
  };
};
