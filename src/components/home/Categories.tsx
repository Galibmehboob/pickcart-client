"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Dumbbell,
  Laptop,
  Shirt,
  ShoppingBasket,
  Sofa,
  Sparkles,
  ToyBrick,
} from "lucide-react";
import { Card } from "@heroui/react";

import SectionTitle from "@/components/common/SectionTitle";

interface Category {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Electronics",
    description: "Latest gadgets and smart devices.",
    href: "/products?category=Electronics",
    icon: Laptop,
  },
  {
    id: 2,
    title: "Fashion",
    description: "Trendy clothing and accessories.",
    href: "/products?category=Fashion",
    icon: Shirt,
  },
  {
    id: 3,
    title: "Home & Kitchen",
    description: "Everything for your living space.",
    href: "/products?category=Home%20%26%20Kitchen",
    icon: Sofa,
  },
  {
    id: 4,
    title: "Beauty",
    description: "Beauty essentials for everyday care.",
    href: "/products?category=Beauty",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Sports",
    description: "Gear for fitness and outdoor activities.",
    href: "/products?category=Sports",
    icon: Dumbbell,
  },
  {
    id: 6,
    title: "Books",
    description: "Discover books across every genre.",
    href: "/products?category=Books",
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Toys",
    description: "Fun toys for kids of all ages.",
    href: "/products?category=Toys",
    icon: ToyBrick,
  },
  {
    id: 8,
    title: "Grocery",
    description: "Daily essentials delivered fast.",
    href: "/products?category=Grocery",
    icon: ShoppingBasket,
  },
];

export default function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Categories"
          title="Shop by Category"
          description="Browse products by category and quickly find exactly what you're looking for."
        />

        <motion.div
          className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={category.href}
                  aria-label={`Browse ${category.title}`}
                  className="block h-full"
                >
                  <Card className="group h-full border border-default-200 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                    <Card className="flex h-full flex-col gap-4 p-6">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                        >
                          <Icon className="size-7" />
                        </motion.div>

                        <ArrowRight className="size-5 text-foreground/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">
                          {category.title}
                        </h3>

                        <p className="text-sm leading-6 text-foreground/70">
                          {category.description}
                        </p>
                      </div>
                    </Card>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}