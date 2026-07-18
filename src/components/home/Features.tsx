"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import {
  BadgeCheck,
  BadgeDollarSign,
  Headset,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your orders delivered quickly and safely.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Secure Payments",
    description:
      "Multiple trusted payment methods with secure checkout.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Quality Products",
    description:
      "Carefully selected products from trusted sellers.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Easy Returns",
    description: "Simple and hassle-free return policy.",
    icon: RotateCcw,
  },
  {
    id: 5,
    title: "24/7 Support",
    description:
      "Friendly customer support whenever you need help.",
    icon: Headset,
  },
  {
    id: 6,
    title: "Best Prices",
    description:
      "Competitive pricing with exclusive deals and discounts.",
    icon: BadgeDollarSign,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why PickCart"
          title="Everything You Need for Better Shopping"
          description="Experience a modern shopping platform designed for speed, security, and convenience."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="group h-full border border-default-200 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                  <Card className="flex h-full flex-col gap-5 p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    >
                      <Icon className="size-7" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}