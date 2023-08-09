import type { Image } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /** @title Logo */
  logo?: { src: Image; alt: string };
}

function Header({ navItems = [], logo }: Props) {
  return (
    <>
      <header>
        <div class="bg-base-100 fixed w-full z-50 top-0">
          <Navbar items={navItems} logo={logo} />
        </div>
      </header>
    </>
  );
}

export default Header;
