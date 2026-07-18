"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlightedText,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  const renderTitle = () => {
    if (!highlightedText || !title.includes(highlightedText)) {
      return title;
    }

    const [before, ...rest] = title.split(highlightedText);
    const after = rest.join(highlightedText);

    return (
      <>
        {before}
        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          {highlightedText}
        </span>
        {after}
      </>
    );
  };

  return (
    <header className={`flex flex-col ${alignment} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {renderTitle()}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}