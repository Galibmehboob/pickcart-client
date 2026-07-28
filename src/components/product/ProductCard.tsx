"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { Package, ShoppingCart, Star, Eye } from "lucide-react";

import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const inStock = product.stock > 0;

  // Calculate discount percentage if discountPrice exists
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-default-200/80 bg-background shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      {/* Upper Media Section */}
      <div>
        <div className="relative aspect-square overflow-hidden bg-default-100">
          {/* Discount Tag */}
          {discountPercentage > 0 && (
            <Chip
              color="danger"
              variant="primary"
              size="sm"
              className="absolute left-3 top-3 z-20 font-semibold shadow-sm"
            >
              {discountPercentage}% OFF
            </Chip>
          )}

          {/* Stock Tag */}
          <Chip
            color={inStock ? "success" : "danger"}
            variant="secondary"
            size="sm"
            className="absolute right-3 top-3 z-20 backdrop-blur-md bg-background/70 font-medium"
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </Chip>

          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="space-y-3.5 p-5">
          {/* Category & Title */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {product.category}
              </span>
              <span className="text-xs text-default-400 font-medium">
                {product.brand}
              </span>
            </div>

            <h3 className="mt-1.5 line-clamp-2 text-base font-bold text-foreground group-hover:text-primary transition-colors min-h-[3rem]">
              {product.name}
            </h3>
          </div>

          {/* Rating & Stock Count */}
          <div className="flex items-center justify-between text-xs border-y border-default-100 py-2.5">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="size-3.5 fill-current" />
              <span className="font-semibold">5.0</span>
              <span className="text-default-400 font-normal">(12)</span>
            </div>

            <div
              className={`flex items-center gap-1.5 ${
                inStock ? "text-success" : "text-danger"
              }`}
            >
              <Package className="size-3.5" />
              <span className="font-medium">
                {inStock ? `${product.stock} items left` : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-1">
            {product.discountPrice ? (
              <>
                <span className="text-2xl font-extrabold text-primary">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-xs text-default-400 line-through font-medium">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-extrabold text-primary">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions / CTA Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">

        <Link href={`/products/${product._id}`}>
       <Button
  variant="outline"
  size="md"
  className="w-full font-medium rounded-lg flex items-center justify-center gap-2"
>
  <Eye className="size-4 text-default-600" />
  <span>Details</span>
</Button>
        </Link>

       <Button
  
  variant="outline"
  size="md"
 
  isDisabled={!inStock}
  className="w-full font-medium shadow-md rounded-lg shadow-primary/20 flex items-center gap-2 justify-center"
  onPress={() => {
  }}
>
  <ShoppingCart className="size-4" />
  <span>Add</span>
</Button>
      </div>
    </motion.article>
  );
}