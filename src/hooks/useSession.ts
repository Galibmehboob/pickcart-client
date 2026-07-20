"use client";

import { useSession as useBetterAuthSession } from "@/lib/auth-client";

type UserRole = "customer" | "seller";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: UserRole;
}

export function useSession() {
  const session = useBetterAuthSession();

  return {
    ...session,
    user: session.data?.user as SessionUser | undefined,
  };
}