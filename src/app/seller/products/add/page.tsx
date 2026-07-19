"use client";

import { motion } from "framer-motion";
import { PlusCircle, Info, Tag, DollarSign, Layers } from "lucide-react";
import { Button, Input } from "@heroui/react";

export default function AddProductPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto w-full rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-6"
    >
      <div className="border-b border-default-100 pb-4">
        <h1 className="text-base font-bold text-foreground tracking-tight">Add New Product</h1>
        <p className="text-[11px] text-default-400 font-medium mt-0.5">Deploy a new commercial entity to your active storefront catalog.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Product Title</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Tag className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="e.g. Aura Pro Soundbar" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Category</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Layers className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="Electronics, Fashion, Home" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Brand Label</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Info className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="e.g. Sony, Logitech" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Base Price (USD)</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="0.00" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Discount Settlement Price</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="0.00" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Stock Allocation Volume</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <PlusCircle className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="Available inventory count" className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Image Deployment URL</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Input placeholder="https://images.unsplash.com/..." className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Product Narrative Description</label>
            <div className="flex items-start gap-2 border border-default-200 min-h-24 bg-background/50 rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
              <textarea placeholder="Outline comprehensive specifications, parameters, and functional capabilities..." className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400 resize-none min-h-20" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button size="md" className="font-bold text-xs rounded-xl h-10 px-6 bg-foreground text-background dark:bg-foreground dark:text-background shadow-md transition-transform active:scale-[0.98]">
            Publish Asset
          </Button>
        </div>
      </form>
    </motion.div>
  );
}