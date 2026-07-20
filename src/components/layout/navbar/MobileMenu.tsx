"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Drawer } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Logo from "./Logo";
import { navItems } from "./navItems";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const router = useRouter();

const {
  data: session,
  isPending,
} = authClient.useSession();

const user = session?.user as
  | {
      id: string;
      name: string;
      email: string;
      image?: string | null;
      role?: "customer" | "seller";
    }
  | undefined;

const handleLogout = async () => {
  await authClient.signOut();

  toast.success("Logged out successfully.");

  router.refresh();
  router.push("/");

  closeMenu();
};

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

                {/* FIXED */}
                <Drawer.CloseTrigger
                  onPress={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-default-100"
                >
                  <X className="h-5 w-5" />
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
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`relative flex rounded-xl px-4 py-3 font-medium transition ${
                              isActive
                                ? "text-primary"
                                : "text-foreground hover:bg-default-100 hover:text-primary"
                            }`}
                          >
                            {isActive && (
                              <motion.span
                                layoutId="mobile-nav-active"
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

  {!isPending && !user ? (
    <>
      <Link
        href="/login"
        onClick={closeMenu}
        className="block w-full"
      >
        <Button
          variant="outline"
          size="lg"
          className="w-full"
        >
          Login
        </Button>
      </Link>

      <Link
        href="/register"
        onClick={closeMenu}
        className="block w-full"
      >
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
        >
          Register
        </Button>
      </Link>
    </>
  ) : (
    <>
      <Link
        href={user?.role === "seller" ? "/seller" : "/dashboard"}
        onClick={closeMenu}
        className="block w-full"
      >
        <Button className="w-full">
          Dashboard
        </Button>
      </Link>

      <Link
        href="/profile"
        onClick={closeMenu}
        className="block w-full"
      >
        <Button
          variant="outline"
          className="w-full"
        >
          Profile
        </Button>
      </Link>

      {user?.role === "customer" && (
        <Link
          href="/dashboard/orders"
          onClick={closeMenu}
          className="block w-full"
        >
          <Button
            variant="outline"
            className="w-full"
          >
            My Orders
          </Button>
        </Link>
      )}

      <Button
        className="w-full"
        variant="danger"
        onPress={handleLogout}
      >
        Logout
      </Button>
    </>
  )}

</Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
}