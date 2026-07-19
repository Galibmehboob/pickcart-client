"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Building, Home, Navigation } from "lucide-react";
import { Input } from "@heroui/react";

interface CheckoutFormData {
  country: string;
  city: string;
  area: string;
  streetAddress: string;
  postalCode: string;
}

interface ShippingAddressProps {
  formData: CheckoutFormData;
  onInputChange: (field: keyof CheckoutFormData, value: string) => void;
}

export default function ShippingAddress({ formData, onInputChange }: ShippingAddressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="rounded-2xl border border-default-100 bg-default-50/20 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
    >
      <h2 className="text-sm font-bold text-foreground tracking-tight border-b border-default-100 pb-2">
        Shipping Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
          <Globe className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
          <Input
            placeholder="Country"
            value={formData.country}
            onChange={(e) => onInputChange("country", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
          />
        </div>

        <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
          <Building className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
          <Input
            placeholder="City"
            value={formData.city}
            onChange={(e) => onInputChange("city", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
          />
        </div>

        <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
          <MapPin className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
          <Input
            placeholder="Area"
            value={formData.area}
            onChange={(e) => onInputChange("area", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
          />
        </div>

        <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
          <Navigation className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
          <Input
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={(e) => onInputChange("postalCode", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
          />
        </div>

        <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors md:col-span-2">
          <Home className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
          <Input
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={(e) => onInputChange("streetAddress", e.target.value)}
            className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
          />
        </div>
      </div>
    </motion.div>
  );
}