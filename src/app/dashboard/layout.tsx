"use client";

import { ReactNode } from "react";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ProtectedRoute role="customer">
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}