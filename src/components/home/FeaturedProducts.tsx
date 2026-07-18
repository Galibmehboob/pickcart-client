"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@heroui/react";

import SectionTitle from "@/components/common/SectionTitle";
import Loader from "@/components/common/Loader";
import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/services/api";

export default function FeaturedProducts() {
  const {
    data: products,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => getProducts({ featured: true }),
  });

  if (isPending) {
    return <Loader text="Loading featured products..." />;
  }

  if (isError) {
    return (
      <section className="py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 text-center">
          <h2 className="text-2xl font-semibold">
            Something went wrong
          </h2>

          <p className="mt-3 text-foreground/70">
            We couldn,t load the featured products. Please try again.
          </p>

          <Button
            variant="secondary"
            className="mt-6"
            onPress={() => {
              void refetch();
            }}
          >
            Retry
          </Button>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Featured"
            title="Featured Products"
            description="Discover the most popular products chosen by our customers."
          />

          <p className="mt-12 text-center text-foreground/70">
            No featured products available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured"
          title="Featured Products"
          description="Discover the most popular products chosen by our customers."
        />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.35 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/products">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}