"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Lock, Truck } from "lucide-react";
import { Button, Chip } from "@heroui/react";
import imageHero from "@/assests/images/hero/hero-shopping.png"


const floatingCards = [
  {
    title: "Fast Delivery",
    icon: Truck,
    className: "-left-4 top-10 md:-left-8",
  },
  {
    title: "4.9 Customer Rating",
    icon: BadgeCheck,
    className: "-right-4 top-1/4 md:-right-8",
  },
  {
    title: "Secure Checkout",
    icon: Lock,
    className: "bottom-8 left-8 md:left-14",
  },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-16 px-4 py-16 sm:px-6 lg:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <Chip
         
            
            className="mb-6 font-medium"
          >
            Trusted by thousands of shoppers
          </Chip>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Shop Smarter with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              PickCart
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-foreground/70 sm:text-lg lg:mx-0"
          >
            Discover quality products, compare prices, and shop confidently
            from one modern platform designed to make every purchase easier,
            faster, and more secure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="/products">
  <Button variant="secondary" size="lg">
    Explore Products
  </Button>
</Link>

<Link href="/seller">
  <Button variant="outline" size="lg">
    Become a Seller
  </Button>
</Link>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative w-full max-w-xl">
           <Image
  src={imageHero}
  alt="Modern online shopping illustration"
  priority
  className="h-auto w-full rounded-2xl"
/>

            {floatingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${card.className}`}
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-default-200 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-sm font-semibold">
                      {card.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}