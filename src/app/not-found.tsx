import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-7xl font-bold tracking-tight text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-foreground">
          Page Not Found
        </h2>

        <p className="mt-4 text-foreground/70">
          Sorry, the page you are looking for doesn,t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button variant="secondary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}