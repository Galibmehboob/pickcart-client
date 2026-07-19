"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { ShieldCheck, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface OrderSummaryProps {
  onPlaceOrder: () => void;
}

export default function OrderSummary({ onPlaceOrder }: OrderSummaryProps) {
  // Temporary structural state synchronization matching structural pipeline constraints
  const staticProducts = [
    {
      id: "crt-1",
      title: "AeroGlide Pro Wireless Mechanical Keyboard",
      price: 189.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "crt-2",
      title: "OmniPoint Ergonomic Wireless Mouse",
      price: 89.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const subtotal = staticProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // Preserved structurally from calculated layout framework
  const shipping = 0.00;
  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal - discount + shipping + tax;

  return (
    <div className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-5 w-full">
      <h2 className="text-base font-bold text-foreground tracking-tight">Order Summary</h2>

      {/* Mini Product Review Queue */}
      <div className="flex flex-col gap-3 max-h-[160px] overflow-y-auto pr-1 border-b border-default-100/60 pb-4">
        {staticProducts.map((product) => (
          <div key={product.id} className="flex items-center gap-3 w-full">
            <div className="relative aspect-square w-10 h-10 rounded-lg overflow-hidden border border-default-100 flex-shrink-0 bg-muted/20">
              <Image
                src={product.image}
                alt={product.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="text-[11px] font-bold text-foreground truncate">{product.title}</h4>
              <p className="text-[10px] text-default-400 font-medium mt-0.5">Qty: {product.quantity}</p>
            </div>
            <span className="text-[11px] font-extrabold text-foreground flex-shrink-0">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Financial Matrix Layout */}
      <div className="flex flex-col gap-3 border-b border-default-100 pb-4">
        <div className="flex justify-between items-center text-xs text-default-500 font-medium">
          <span>Subtotal</span>
          <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-success font-semibold">
          <span>Discount (20% Promo)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-xs text-default-500 font-medium">
          <span>Shipping</span>
          <span className="text-success font-bold">Free</span>
        </div>

        <div className="flex justify-between items-center text-xs text-default-500 font-medium">
          <span>Estimated Tax</span>
          <span className="text-foreground font-semibold">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Aggregate Computation Output */}
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm font-bold text-foreground">Total</span>
        <span className="text-xl font-extrabold text-foreground tracking-tight">
          ${grandTotal.toFixed(2)}
        </span>
      </div>

      {/* Execution Context Action Block */}
      <div className="flex flex-col gap-2.5 mt-2">
        <Button
          size="lg"
          onClick={onPlaceOrder}
          className="w-full font-bold text-xs rounded-xl h-11 bg-foreground text-background dark:bg-foreground dark:text-background shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Place Order</span>
        </Button>
        
       <Link href="/cart">
        <Button
          size="lg"
          variant="outline"
          className="w-full font-semibold text-xs text-default-500 hover:text-foreground border border-default-200 rounded-xl h-11 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Cart</span>
        </Button>
       </Link>
      </div>
    </div>
  );
}