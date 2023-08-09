import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";

function Navbar({
  items,
  logo,
}: {
  items: INavItem[];
  logo?: { src: string; alt: string };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pr-6 gap-2">
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center"
            aria-label="Blog logo"
          >
            <Image src={logo.src} alt={logo.alt} width={80} />
          </a>
        )}
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex container mx-auto text-base items-center justify-between border-b h-20">
        <div class="flex-none w-44">
          {logo && (
            <a
              href="/"
              aria-label="Blog logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Image src={logo.src} alt={logo.alt} width={80} />
            </a>
          )}
        </div>
        <div class="flex">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
