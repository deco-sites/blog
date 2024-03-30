import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";

export interface CTA {
  id?: string;
  text?: string;
  outline?: boolean;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  cta?: CTA;
  maxPerPage?: number;
  postsPerClick?: number;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  cta = { id: "view-all", text: "View all", outline: true },
  maxPerPage = 9,
  postsPerClick = 3,
  posts = [
    {
      url: "/",
      title: "Title of blogpost #1",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #4",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #5",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #6",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #7",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #8",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #9",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #10",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #11",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #12",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ],
}: Props) {
  const [visiblePosts, setVisiblePosts] = useState(maxPerPage);

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsPerClick);
  };
  return (
    <div class="lg:container lg:mx-auto lg:py-14 md:max-w-6xl mx-4 py-12 text-sm">
      <div class="space-y-16">
        <div class="gap-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {posts?.slice(0, visiblePosts).map((post) => (
            <a
              href={post.url}
              class="border border-secondary overflow-hidden rounded-lg"
            >
              <Image
                width={640}
                class="object-fit w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{post.readingTime}</div>
                <div class="space-y-2">
                  <h3 class="text-2xl">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        {posts?.length > visiblePosts && (
          <div class="flex justify-center w-full">
            <button
              key={cta?.id}
              id={cta?.id}
              class={`font-normal btn btn-primary ${
                cta.outline && "btn-outline"
              }`}
              aria-label={cta?.text}
              onClick={showMorePosts}
            >
              {cta?.text}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
