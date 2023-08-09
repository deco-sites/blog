export interface INavItem {
  label: string;
  href: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  return (
    <li class="group relative flex items-center">
      <a href={href} class="px-4 py-2 cursor-pointer">
        <span class="uppercase tracking-widest text-sm">{label}</span>
        <div class="absolute w-0 h-0.5 bg-black group-hover:w-6 transition-all duration-300 ease-in-out bottom-0 left-1/2 transform -translate-x-1/2" />
      </a>
    </li>
  );
}

export default NavItem;
