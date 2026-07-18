"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Drawer } from "@heroui/react";

import Logo from "./Logo";
import { navItems } from "./navItems";


export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button
          isIconOnly
          variant="ghost"
          aria-label="Open navigation menu"
          onPress={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="right">
            <Drawer.Dialog className="flex h-full flex-col">
              <Drawer.Header className="flex items-center justify-between px-6 py-4">
                <Logo />

                <Drawer.CloseTrigger >
                 <Button
  isIconOnly
  variant="ghost"
  aria-label="Close navigation menu"
  onPress={closeMenu}
>
  <X className="h-6 w-6" />
</Button>
                </Drawer.CloseTrigger>
              </Drawer.Header>

              <Drawer.Body className="flex-1 px-4 py-6">
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    {navItems.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);

                      return (
                        <li key={item.href} className="relative">
                          <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={closeMenu}
                            className={`relative flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                              isActive
                                ? "text-primary"
                                : "text-foreground hover:bg-default hover:text-primary"
                            }`}
                          >
                            {isActive && (
                              <motion.span
                                layoutId="mobile-active-indicator"
                                className="absolute inset-0 rounded-xl bg-primary/10"
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 35,
                                }}
                              />
                            )}

                            <span className="relative z-10">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Drawer.Body>

              <Drawer.Footer className="flex-col gap-3 px-4 py-5">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="block w-full"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Login
                  </Button>
                </Link>

                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="block w-full"
                >
                  <Button variant="secondary" size="lg" className="w-full">
                    Register
                  </Button>
                </Link>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
}