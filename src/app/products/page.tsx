"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`
        );

        const data = await response.json();

        setProducts(data.data ?? []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    void loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}