"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { Package, ShoppingCart, Star } from "lucide-react";

import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const inStock = product.stock > 0;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-default-200 bg-background shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <Chip className="absolute left-4 top-4 z-10">
          Product
        </Chip>

        <div className="relative aspect-square overflow-hidden bg-default-100">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.35 }}
            className="h-full w-full"
          >
            <Image
              src={product.image || "/placeholder.png"}
              alt={product.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-medium text-primary">
            {product.category}
          </p>

          <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-foreground">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-foreground/60">
            {product.brand}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="size-4 fill-current" />
            <span className="font-medium">5.0</span>
          </div>

          <div
            className={`flex items-center gap-1 ${
              inStock ? "text-success" : "text-danger"
            }`}
          >
            <Package className="size-4" />

            <span className="text-sm font-medium">
              {inStock
                ? `${product.stock} In Stock`
                : "Out of Stock"}
            </span>
          </div>
        </div>

        <div className="flex items-end gap-3">
          {product.discountPrice ? (
            <>
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.discountPrice)}
              </span>

              <span className="text-sm text-foreground/50 line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={`/products/${product._id}`}
            className="flex-1"
          >
            <Button
              variant="secondary"
              className="w-full"
            >
              View Details
            </Button>
          </Link>

          <Button
            variant="outline"
            className="flex-1"
            onPress={() => {
              // TODO: Add to cart
            }}
          >
            <ShoppingCart className="size-4" />
            <span>Add To Cart</span>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}