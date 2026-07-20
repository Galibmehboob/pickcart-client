"use client";

import { ReactNode } from "react";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import SellerLayout from "@/components/seller/SellerLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ProtectedRoute role="seller">
      <SellerLayout>{children}</SellerLayout>
    </ProtectedRoute>
  );
}