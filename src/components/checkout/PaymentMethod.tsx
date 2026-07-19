"use client";

import { motion } from "framer-motion";
import { DollarSign, CreditCard } from "lucide-react";

interface PaymentMethodProps {
  currentMethod: "cod" | "card";
  onChange: (method: "cod" | "card") => void;
}

export default function PaymentMethod({ currentMethod, onChange }: PaymentMethodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.08 }}
      className="rounded-2xl border border-default-100 bg-default-50/20 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
    >
      <h2 className="text-sm font-bold text-foreground tracking-tight border-b border-default-100 pb-2">
        Payment Method
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Cash on Delivery Selection */}
        <button
          type="button"
          onClick={() => onChange("cod")}
          className={`flex items-start gap-3 p-4 rounded-xl border transition-all text-left group ${
            currentMethod === "cod"
              ? "border-primary bg-primary/5 shadow-sm"
              : "border-default-200 bg-background/50 hover:border-default-300"
          }`}
        >
          <div className={`p-2 rounded-lg ${currentMethod === "cod" ? "bg-primary text-primary-foreground" : "bg-default-100 text-default-500"}`}>
            <DollarSign className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Cash on Delivery</p>
            <p className="text-[10px] text-default-400 font-medium mt-0.5">Pay with cash upon delivery</p>
          </div>
        </button>

        {/* Card Payment (Disabled Layer) */}
        <div className="flex items-start gap-3 p-4 rounded-xl border border-default-100 bg-default-50/40 text-left opacity-60 cursor-not-allowed relative overflow-hidden">
          <div className="p-2 rounded-lg bg-default-100 text-default-400">
            <CreditCard className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold text-default-500">Card Payment</p>
              <span className="text-[9px] font-bold bg-default-200 text-default-600 px-1.5 py-0.5 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-[10px] text-default-400 font-medium mt-0.5">Pay via Visa, Mastercard or Amex</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}