"use client";

import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { toast } from "sonner";

import SectionTitle from "@/components/common/SectionTitle";

export default function Newsletter() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // TODO: Integrate newsletter subscription API.

    toast.success("Thanks for subscribing to our newsletter!");

    form.reset();
    inputRef.current?.focus();
  };

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Newsletter"
          title="Stay Updated with PickCart"
          description="Subscribe to receive product updates, exclusive offers, and shopping tips."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Input
              ref={inputRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="flex-1"
            />

            <Button
              type="submit"
              variant="secondary"
              className="sm:px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}