"use client";

import ProductActions from "@/components/product/ProductActions";
import ProductGallery from "@/components/product/ProductGallery";

import ProductHighlights from "@/components/product/ProductHighlights";
import ProductInfo from "@/components/product/ProductInfo";

import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";


const product = {
  id: "1",
  title: "AeroGlide Pro Wireless Mechanical Keyboard",
  brand: "OmniTech Labs",
  category: "Computer Accessories",
  rating: 4.8,
  reviewCount: 142,
  price: 189.99,
  originalPrice: 249.99,
  stock: "In Stock (Only 8 left)",
  description:
    "Experience unparalleled tactile precision and ultra-low latency typing with the AeroGlide Pro. Featuring hot-swappable custom linear switches, triple-mode connectivity, and a solid premium aircraft-grade aluminum top case.",
  images: [
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626958390898-162d3577f593?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
  ],
};

export default function ProductDetailsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8">
          <ProductGallery
      images={product.images}
      title={product.title}
    />
        </div>

        <div className="space-y-8">
         <ProductInfo
  title={product.title}
  brand={product.brand}
  category={product.category}
  rating={product.rating}
  reviewCount={product.reviewCount}
  price={product.price}
  originalPrice={product.originalPrice}
  stock={product.stock}
  description={product.description}
/>
          <ProductActions />
        </div>
      </section>

      <ProductHighlights />

      <ProductTabs />

      <RelatedProducts />
    </main>
  );
}