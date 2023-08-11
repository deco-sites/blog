import type { BlogPosting, Organization } from "../blog/types.ts";
import { formatDate } from "../sdk/format.ts";

export interface Props {
  post: BlogPosting;
}

export default function FeaturedBlogPost({ post }: Props) {

    if (!post) {
        return null;
    }
  const author = post.author as Organization[];
  const formattedDate = formatDate(post.datePublished);

  return (
    <div class="flex flex-row space-y-2 lg:space-y-4">
      {/* <img
        class="aspect-video object-cover overflow-hidden"
        src={post.image?.url}
        alt={post.image?.alternateName}
      />
      <div class="flex justify-between text-gray-400 tracking-wider font-light">
        <p>{author[0]?.name}</p>
        <p>{formattedDate}</p>
      </div>
      <div class="flex flex-col space-y-1 lg:space-y-2 items-start text-ellipsis">
        <h3 class="text-2xl font-bold text-black line-clamp-2 tracking-wide">
          {post.headline}
        </h3>
        <div
          class="text-gray-400 line-clamp-3 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.description || "" }}
        />
      </div> */}
    </div>
  );
}
