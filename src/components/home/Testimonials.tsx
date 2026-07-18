"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@heroui/react";
import { Star } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    review:
      "PickCart made online shopping incredibly simple. The delivery was fast, the products matched the description, and the checkout process was seamless.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Tech Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "I found the best deals on electronics in just a few minutes. The product quality exceeded my expectations and I'll definitely shop again.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Fashion Lover",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "The variety of fashion products is amazing. I loved the easy navigation, secure payment process, and quick delivery to my doorstep.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review:
      "Excellent customer service and reliable sellers. Every purchase has been smooth, and the return process was surprisingly easy.",
  },
  {
    id: 5,
    name: "Olivia Davis",
    role: "Regular Shopper",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "I appreciate how organized everything is. Comparing products and finding the right option has never been easier than with PickCart.",
  },
  {
    id: 6,
    name: "Daniel Martinez",
    role: "Premium Customer",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review:
      "Fast delivery, genuine products, and a beautiful shopping experience. PickCart has become my first choice whenever I need to shop online.",
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

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimonials"
          title="What Our Customers Say"
          description="Thousands of shoppers trust PickCart for a fast, secure, and enjoyable shopping experience."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="h-full border border-default-200 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <Card className="flex h-full flex-col gap-5 p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-foreground/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-sm leading-7 text-foreground/70">
                    “{testimonial.review}”
                  </p>
                </Card>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}