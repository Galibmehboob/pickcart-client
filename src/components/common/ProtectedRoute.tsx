"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Loader from "./Loader";
import { useSession } from "@/hooks/useSession";


interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "customer" | "seller";
}

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const router = useRouter();

  const {
  user,
  isPending,
} = useSession();

  useEffect(() => {
    if (isPending) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (role && user.role !== role) {
      router.replace("/");
    }
  }, [user, role, isPending, router]);

 if (isPending) {
    return (
      <Loader
        fullScreen
        text="Checking authentication..."
      />
    );
  }

  if (!user) {
    return null;
  }

  if (role && user.role !== role) {
    return null;
  }

  return <>{children}</>;
}