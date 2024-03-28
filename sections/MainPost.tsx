import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href?: string;
  text?: string;
  outline?: boolean;
}

/** @title {{{title}}} */
export interface Post {
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  posts?: Post;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function MainPost({
  posts = {
    title: "Title of blogpost #1",
    author: "Name of the author",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: DEFAULT_IMAGE,
    date: "01 Apr 2024",
    readingTime: "Reading time: 10 min",
    tags: ["Tag #1", "Tag #2", "Tag #3"],
  },
}: Props) {
  return (
    <div class="lg:container lg:mx-auto lg:py-14 md:max-w-6xl mx-4 py-12 text-sm">
      <div class="space-y-16">
        <div class="border border-secondary gap-8 grid grid-cols-1 items-center md:grid-cols-2 overflow-hidden rounded-lg">
          {posts.image && (
            <Image
              width={656}
              height={500}
              class="object-fit w-full z-10"
              sizes="(max-width: 656px) 100vw, 30vw"
              src={posts.image || ""}
              alt={posts.image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div class="p-6 space-y-4">
            <div class="font-semibold">{posts.readingTime}</div>
            <div class="space-y-2">
              <h3 class="text-2xl">{posts.title}</h3>
              <p class="text-base">{posts.excerpt}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              {posts.tags?.map((tag) => (
                <div class="badge badge-lg badge-primary text-xs">
                  {tag}
                </div>
              ))}
            </div>
            <div class="flex flex-wrap gap-2">
              <span>{posts.date}</span>
              <span>•</span>
              <span>{posts.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
