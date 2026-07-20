"use client";

import EditProductForm from "@/components/seller/EditProductForm";
import { use } from "react";



interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function EditProductPage({
  params,
}: Props) {
  const { id } = use(params);

  return <EditProductForm id={id} />;
}