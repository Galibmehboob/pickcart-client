"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { Star } from "lucide-react";

interface ProductInfoProps {
  title: string;
  brand: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  stock: string;
  description: string;
}



export default function ProductInfo({
  title,
  brand,
  category,
  rating,
  reviewCount,
  price,
  originalPrice,
  stock,
  description,
}: ProductInfoProps) {
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {brand}
        </p>

        <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
          {title}
        </h1>

        <p className="text-sm text-default-500">
          Category:
          <span className="ml-1 font-medium text-default-700">
            {category}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(rating)
                  ? "fill-warning text-warning"
                  : "text-default-300"
              }`}
            />
          ))}
        </div>

        <span className="font-semibold">
          {rating.toFixed(1)}
        </span>

        <span className="text-default-500">
          ({reviewCount} Reviews)
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-4xl font-bold">
          ${price.toFixed(2)}
        </span>

        <span className="text-xl text-default-400 line-through">
          ${originalPrice.toFixed(2)}
        </span>

        <Chip
          color="danger"
         
        >
          -{discount}%
        </Chip>
      </div>

      <Chip
        color="success"
    
        className="font-medium"
      >
        {stock}
      </Chip>

      <p className="leading-8 text-default-600">
        {description}
      </p>
    </motion.section>
  );
}