"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Card } from "@heroui/react";
import { ShoppingCart, Star } from "lucide-react";

const relatedProducts = [
  {
    id: "1",
    title: "Mechanical Keyboard",
    price: "$149.99",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Wireless Gaming Mouse",
    price: "$79.99",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Premium Desk Setup",
    price: "$229.99",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "RGB Headset",
    price: "$119.99",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=900&auto=format&fit=crop",
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Related Products
        </h2>

        <p className="mt-2 text-default-500">
          You may also like these products.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
          >
            <Card className="overflow-hidden rounded-3xl border border-default-200 transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <Card.Content className="space-y-4 p-5">
                <div>
                  <h3 className="line-clamp-2 text-lg font-semibold">
                    {product.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {product.price}
                  </span>

                  <Button
                    variant="secondary"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>

                <Link href={`/products/${product.id}`}>
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}