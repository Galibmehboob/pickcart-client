"use client";

import { useState } from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

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

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    area: "",
    streetAddress: "",
    postalCode: "",
    paymentMethod: "cod",
    orderNotes: "",
  });

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // Structural placeholder for future production endpoint
  };

  return (
    <main className="min-h-screen w-full bg-background text-foreground px-4 py-8 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-6 w-full">
            <CheckoutForm formData={formData} onInputChange={handleInputChange} />
          </div>
          <div className="lg:col-span-4 w-full lg:sticky lg:top-8">
            <OrderSummary onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>
    </main>
  );
}