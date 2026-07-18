"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { Card} from "@heroui/react";
import { Package, ShoppingBag, Store, Users } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const statistics: Statistic[] = [
  {
    id: 1,
    value: "10K+",
    label: "Products",
    icon: Package,
  },
  {
    id: 2,
    value: "50K+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    id: 3,
    value: "100K+",
    label: "Orders Delivered",
    icon: ShoppingBag,
  },
  {
    id: 4,
    value: "500+",
    label: "Trusted Sellers",
    icon: Store,
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

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Impact"
          title="Trusted by Thousands"
          description="Every order helps us build a better shopping experience for everyone."
        />

        <motion.div
          className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="group h-full border border-default-200 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                  <Card className="flex items-center gap-5 p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    >
                      <Icon className="size-8" />
                    </motion.div>

                    <div>
                      <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-foreground/70">
                        {stat.label}
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