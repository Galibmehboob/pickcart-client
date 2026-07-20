"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";

interface ProductInfoProps {
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  stock: string;
  description: string;
}

export default function ProductInfo({
  title,
  brand,
  category,
  price,
  originalPrice,
  stock,
  description,
}: ProductInfoProps) {
  const discount =
  originalPrice > price
    ? Math.round(
        ((originalPrice - price) / originalPrice) * 100
      )
    : 0;

  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {brand}
        </p>

        <h1 className="text-3xl font-bold lg:text-4xl">
          {title}
        </h1>

        <p className="text-sm text-default-500">
          Category :
          <span className="ml-1 font-medium text-default-700">
            {category}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-4xl font-bold">
          ${price.toFixed(2)}
        </span>

        {originalPrice > price && (
          <>
            <span className="text-xl line-through text-default-400">
              ${originalPrice.toFixed(2)}
            </span>

            <Chip color="danger">
              -{discount}%
            </Chip>
          </>
        )}
      </div>

      <Chip color="success" className="font-medium">
        {stock}
      </Chip>

      <p className="leading-8 text-default-600">
        {description}
      </p>
    </motion.section>
  );
}