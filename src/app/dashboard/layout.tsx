"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}