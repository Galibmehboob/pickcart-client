"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "./navItems";





export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden lg:flex"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative z-10 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>

              {isActive && (
                <motion.span
                  layoutId="navbar-active-indicator"
                  className="absolute inset-0 -z-0 rounded-md bg-primary/10"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}