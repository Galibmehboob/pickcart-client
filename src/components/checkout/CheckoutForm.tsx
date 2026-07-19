"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, FileText } from "lucide-react";
import { Input } from "@heroui/react";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  area: string;
  streetAddress: string;
  postalCode: string;
  paymentMethod: "cod" | "card";
  orderNotes: string;
}

interface CheckoutFormProps {
  formData: CheckoutFormData;
  onInputChange: (field: keyof CheckoutFormData, value: string) => void;
}

export default function CheckoutForm({ formData, onInputChange }: CheckoutFormProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Customer Information */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-default-100 bg-default-50/20 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-sm font-bold text-foreground tracking-tight border-b border-default-100 pb-2">
          Customer Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
            <User className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
            <Input
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
            />
          </div>
          
          <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
            <Mail className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
            <Input
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
            />
          </div>

          <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors md:col-span-2">
            <Phone className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
            />
          </div>
        </div>
      </motion.div>

      {/* Shipping Information */}
      <ShippingAddress formData={formData} onInputChange={onInputChange} />

      {/* Payment Selection */}
      <PaymentMethod currentMethod={formData.paymentMethod} onChange={(val) => onInputChange("paymentMethod", val)} />

      {/* Order Notes */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="rounded-2xl border border-default-100 bg-default-50/20 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-sm font-bold text-foreground tracking-tight border-b border-default-100 pb-2">
          Order Notes
        </h2>
        <div className="flex items-start gap-2 border border-default-200 min-h-20 bg-background/50 rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
          <FileText className="text-default-400 h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
            value={formData.orderNotes}
            onChange={(e) => onInputChange("orderNotes", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400 resize-none min-h-16"
          />
        </div>
      </motion.div>
    </div>
  );
}