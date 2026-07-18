"use client";

import { motion } from "framer-motion";
import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "How do I place an order?",
    answer:
      "Browse products, add your preferred items to the cart, proceed to checkout, provide your shipping details, and complete the payment to place your order.",
  },
  {
    id: "2",
    question: "Can I return a product?",
    answer:
      "Yes. Eligible products can be returned within the return period as long as they meet our return policy and are in their original condition.",
  },
  {
    id: "3",
    question: "How long does shipping take?",
    answer:
      "Delivery times vary by location, but most orders are delivered within a few business days after they are confirmed.",
  },
  {
    id: "4",
    question: "Which payment methods are supported?",
    answer:
      "We support major credit and debit cards along with other secure online payment options available during checkout.",
  },
  {
    id: "5",
    question: "Do I need an account to purchase?",
    answer:
      "Creating an account is recommended for order tracking and faster checkout, although guest checkout may be available for selected purchases.",
  },
  {
    id: "6",
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through the contact page, email, or phone during our customer service hours.",
  },
];

export default function FAQ() {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about shopping with PickCart."
          align="center"
        />

        <div className="mt-12 rounded-3xl border border-default-200 bg-background p-2 shadow-sm">
    <Accordion
  variant="surface"
  className="w-full"
>
  {faqs.map((faq) => (
    <Accordion.Item key={faq.id}>
      <Accordion.Heading>
        <Accordion.Trigger>
          {faq.question}
          <Accordion.Indicator>
            <ChevronDown className="size-4" />
          </Accordion.Indicator>
        </Accordion.Trigger>
      </Accordion.Heading>

      <Accordion.Panel>
        <Accordion.Body>
          <p className="leading-7 text-foreground/70">
            {faq.answer}
          </p>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  ))}
</Accordion>
        </div>
      </div>
    </motion.section>
  );
}