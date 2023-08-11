import BlogPostCard from "../components/ui/post/PostCard.tsx";

import type { BlogPosting } from "../blog/types.ts";

export interface Props {
  posts: BlogPosting[] | null;
}

export default function PostList({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div class="lg:container mx-8 md:mx-16 lg:mx-auto py-24">
      <h2 class="text-3xl font-bold mb-8">Latest Posts</h2>
      <div class="w-full justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {posts.map((post) => <BlogPostCard post={post} />)}
      </div>
    </div>
  );
}
