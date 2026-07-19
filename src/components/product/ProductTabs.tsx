"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button } from "@heroui/react";
import {
  FileText,
  Settings2,
  MessageSquare,
  Star,
} from "lucide-react";

type TabKey = "description" | "specifications" | "reviews";

const specifications = [
  { label: "Brand", value: "OmniTech Labs" },
  { label: "Switch Type", value: "Hot-swappable Linear" },
  { label: "Connectivity", value: "Bluetooth 5.1 / 2.4GHz / USB-C" },
  { label: "Battery", value: "Up to 200 Hours" },
  { label: "Layout", value: "75% Compact" },
  { label: "Material", value: "Aluminum + PBT Keycaps" },
];

const reviews = [
  {
    name: "Sarah K.",
    rating: 5,
    date: "July 12, 2026",
    comment:
      "Excellent keyboard. Premium build quality, amazing typing experience and outstanding battery life.",
  },
  {
    name: "David M.",
    rating: 4,
    date: "June 28, 2026",
    comment:
      "Very comfortable for long coding sessions. Wireless mode performs flawlessly.",
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] =
    useState<TabKey>("description");

  return (
    <section className="mt-20">
      <div className="mb-8 flex flex-wrap gap-3">
        <Button
          variant={
            activeTab === "description"
              ? "secondary"
              : "outline"
          }
          onPress={() => setActiveTab("description")}
        >
          <FileText className="mr-2 h-4 w-4" />
          Description
        </Button>

        <Button
          variant={
            activeTab === "specifications"
              ? "secondary"
              : "outline"
          }
          onPress={() =>
            setActiveTab("specifications")
          }
        >
          <Settings2 className="mr-2 h-4 w-4" />
          Specifications
        </Button>

        <Button
          variant={
            activeTab === "reviews"
              ? "secondary"
              : "outline"
          }
          onPress={() => setActiveTab("reviews")}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Reviews
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "description" && (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="rounded-3xl">
              <Card.Header>
                <Card.Title>
                  Product Description
                </Card.Title>
                <Card.Description>
                  Everything you need to know
                </Card.Description>
              </Card.Header>

              <Card.Content className="space-y-5">
                <p className="leading-8 text-default-600">
                  Designed for professionals,
                  creators and gamers, the
                  AeroGlide Pro delivers an
                  exceptional typing experience
                  with premium aluminum
                  construction, hot-swappable
                  switches and ultra-low latency
                  wireless connectivity.
                </p>

                <p className="leading-8 text-default-600">
                  Whether you,re working,
                  studying or gaming, this
                  keyboard combines comfort,
                  durability and performance in a
                  beautiful modern design.
                </p>
              </Card.Content>
            </Card>
          </motion.div>
        )}

        {activeTab === "specifications" && (
          <motion.div
            key="specifications"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="rounded-3xl">
              <Card.Header>
                <Card.Title>
                  Specifications
                </Card.Title>
              </Card.Header>

              <Card.Content>
                <div className="space-y-3">
                  {specifications.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-default-200 p-4"
                    >
                      <span className="font-medium text-default-500">
                        {item.label}
                      </span>

                      <span className="font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
          </motion.div>
        )}

        {activeTab === "reviews" && (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="rounded-3xl">
              <Card.Header>
                <Card.Title>
                  Customer Reviews
                </Card.Title>
              </Card.Header>

              <Card.Content className="space-y-5">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="rounded-2xl border border-default-200 p-5"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold">
                        {review.name}
                      </h4>

                      <span className="text-sm text-default-500">
                        {review.date}
                      </span>
                    </div>

                    <div className="mb-3 flex gap-1">
                      {Array.from({
                        length: review.rating,
                      }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="leading-7 text-default-600">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </Card.Content>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}