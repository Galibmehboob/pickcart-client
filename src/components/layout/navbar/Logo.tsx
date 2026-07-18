import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="PickCart Home"
      className="group inline-flex items-center gap-2 rounded-md transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
        <ShoppingBag
          className="h-5 w-5"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </span>

      <span className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-2xl">
        PickCart
      </span>
    </Link>
  );
}