"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { toast } from "sonner";

import {
  Avatar,
  Button,
  Dropdown,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useSession } from "@/hooks/useSession";

export default function Navbar() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

 

const {
  data: session,
  isPending,
  user,
} = useSession();

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully.");

    router.refresh();
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

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
              aria-label="Theme Toggle"
            >
              <Moon className="size-5" />
            </Button>

            {!isPending && !user && (
              <>
                <Link href="/login">
                  <Button variant="outline">
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button variant="secondary">
                    Register
                  </Button>
                </Link>
              </>
            )}

            {!isPending && user && (
              <>

                {user.role === "customer" && (
                  <Link href="/cart">
                    <Button variant="outline">
                      Cart
                    </Button>
                  </Link>
                )}

                {user.role === "seller" && (
                  <Link href="/seller">
                    <Button variant="primary">
                      Dashboard
                    </Button>
                  </Link>
                )}

                <Dropdown>

                  <Dropdown.Trigger className="rounded-full border border-default-200 p-0.5 transition-colors hover:border-primary">

                    <Avatar>

                      <Avatar.Image
                        src={user.image ?? ""}
                        alt={user.name}
                      />

                      <Avatar.Fallback delayMs={600}>
                        {user.name.charAt(0).toUpperCase()}
                      </Avatar.Fallback>

                    </Avatar>

                  </Dropdown.Trigger>

                  <Dropdown.Popover className="w-64">                     <div className="border-b px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <Avatar.Image
                            src={user.image ?? ""}
                            alt={user.name}
                          />
                          <Avatar.Fallback delayMs={600}>
                            {user.name.charAt(0).toUpperCase()}
                          </Avatar.Fallback>
                        </Avatar>

                        <div className="flex flex-col">
                          <p className="text-sm font-semibold">
                            {user.name}
                          </p>

                          <p className="text-xs text-default-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Dropdown.Menu>

                      {user.role === "customer" ? (
                        <>
                          <Dropdown.Item
                            id="dashboard"
                            textValue="Dashboard"
                            href="/dashboard"
                          >
                            Dashboard
                          </Dropdown.Item>

                          <Dropdown.Item
                            id="orders"
                            textValue="Orders"
                            href="/dashboard/orders"
                          >
                            My Orders
                          </Dropdown.Item>

                          <Dropdown.Item
                            id="profile"
                            textValue="Profile"
                            href="/profile"
                          >
                            My Profile
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item
                            id="profile"
                            textValue="Profile"
                            href="/seller/profile"
                          >
                            Seller Profile
                          </Dropdown.Item>
                        </>
                      )}

                      <Dropdown.Item
                        id="logout"
                        textValue="Logout"
                        variant="danger"
                        onAction={handleLogout}
                      >
                        Logout
                      </Dropdown.Item>

                    </Dropdown.Menu>

                  </Dropdown.Popover>

                </Dropdown>

              </>
            )}

          </div>

          <div className="flex items-center gap-2 lg:hidden">

            <Button
              isIconOnly
              variant="ghost"
              aria-label="Theme Toggle"
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