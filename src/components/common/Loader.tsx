"use client";

import { motion } from "framer-motion";
import { Spinner } from "@heroui/react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  text?: string;
}

export default function Loader({
  size = "md",
  fullScreen = false,
  text,
}: LoaderProps) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={
        fullScreen
          ? "flex min-h-screen flex-col items-center justify-center gap-4"
          : "flex w-full flex-col items-center justify-center gap-4 py-12"
      }
    >
      <Spinner size={size} />

      {text ? (
        <p className="text-sm text-foreground/70">{text}</p>
      ) : null}
    </motion.div>
  );
}