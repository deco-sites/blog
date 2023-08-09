import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  title?: string;
  headline?: string;
}

export default function Heading({
  title = "Blog",
  headline =
    "Learn how to combine performance and personalization for the ultimate sales results.",
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-20 text-xl md:text-base py-24">
      <h1 class="font-bold text-5xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
        {title}
      </h1>
      <p class="mt-4 lg:mt-8 text-base lg:text-xl md:w-1/2">{headline}</p>
    </header>
  );
}
