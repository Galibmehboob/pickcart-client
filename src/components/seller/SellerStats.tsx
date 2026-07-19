"use client";

import { ComponentType } from "react";
import { motion } from "framer-motion";

interface SellerStatsProps {
  title: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
  iconColor: string;
  delay?: number;
}

export default function SellerStats({ title, value, icon: Icon, iconColor, delay = 0 }: SellerStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-5 shadow-xs flex items-center justify-between gap-4 w-full"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-default-400 uppercase tracking-wider">{title}</p>
        <p className="text-xl font-extrabold text-foreground tracking-tight mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-xl flex-shrink-0 ${iconColor}`}>
        <Icon className="h-4 w-4 stroke-[2]" />
      </div>
    </motion.div>
  );
}