export interface NavItem {
  readonly label: string;
  readonly href: `/${string}` | "/";
}

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const satisfies readonly NavItem[];