"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getProductById } from "@/services/api";
import { Product } from "@/types/product";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ProductHighlights from "@/components/product/ProductHighlights";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        Product not found
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="grid gap-10 lg:grid-cols-2">

        <ProductGallery
  title={product.name}
  images={product.image ? [product.image] : []}
/>

        <div className="space-y-8">
         <ProductInfo
  title={product.name}
  brand={product.brand}
  category={product.category}
 

  price={Number(product.price ?? 0)}
  originalPrice={
    Number(product.discountPrice || product.price || 0)
  }
  stock={
    product.stock > 0
      ? `In Stock (${product.stock})`
      : "Out of Stock"
  }
  description={product.description}
/>
          <ProductActions product={product} />
        </div>

      </section>

      <ProductHighlights />

      <ProductTabs />

      <RelatedProducts />
    </main>
  );
}