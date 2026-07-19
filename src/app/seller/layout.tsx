"use client";

import { ReactNode } from "react";
import SellerLayout from "@/components/seller/SellerLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <SellerLayout>{children}</SellerLayout>;
}