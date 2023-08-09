import { BlogPosting } from "../blog/types.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  posts: BlogPosting[] | null;
}

export default function PostList({ posts }: Props) {
  console.log(posts);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div class="p-4">
      {JSON.stringify(posts)}
    </div>
  );
}
