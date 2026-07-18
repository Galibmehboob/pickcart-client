"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { Button } from "@heroui/react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50"
    >
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-default-200 bg-background/80 shadow-md backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Logo />

          <div className="hidden flex-1 justify-center lg:flex">
            <NavLinks />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              isIconOnly
              variant="ghost"
              aria-label="Theme toggle coming soon"
            >
              <Moon className="size-5" />
            </Button>

            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>

            <Link href="/register">
              <Button variant="secondary">Register</Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              isIconOnly
              variant="ghost"
              aria-label="Theme toggle coming soon"
            >
              <Moon className="size-5" />
            </Button>

            <MobileMenu />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}