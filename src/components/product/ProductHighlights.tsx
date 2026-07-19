"use client";

import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { RotateCcw, ShieldCheck, Truck } from "lucide-react";

const highlights = [
  {
    title: "Free Shipping",
    description:
      "Enjoy fast and free delivery on eligible orders across the country.",
    icon: Truck,
  },
  {
    title: "30-Day Returns",
    description:
      "Not satisfied? Return your purchase within 30 days with ease.",
    icon: RotateCcw,
  },
  {
    title: "Secure Payments",
    description:
      "Every transaction is protected with industry-standard encryption for complete peace of mind.",
    icon: ShieldCheck,
  },
] as const;

export default function ProductHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mt-10"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
            >
              <Card className="h-full rounded-3xl border border-default-200 bg-content1 shadow-sm transition-all hover:shadow-xl">
                <Card.Header className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <Card.Title>{item.title}</Card.Title>
                </Card.Header>

                <Card.Content>
                  <p className="text-sm leading-7 text-default-500">
                    {item.description}
                  </p>
                </Card.Content>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}