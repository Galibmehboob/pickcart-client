"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-default-200 bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-6 py-16 text-center shadow-xl sm:px-10 lg:px-16"
        >
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />

          <div className="relative mx-auto flex max-w-[900px] flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Chip variant="secondary">
                Ready to Start?
              </Chip>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Find Your Next Favorite Product Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-2xl text-base leading-8 text-foreground/70 md:text-lg"
            >
              Join thousands of shoppers discovering quality products,
              secure checkout, and a seamless shopping experience with
              PickCart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/products">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Explore Products
                </Button>
              </Link>

              <Link href="/items/add">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Become a Seller
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}