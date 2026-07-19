"use client";

import { Button, Input } from "@heroui/react";
import { Ticket, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface CartItemType {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
}

interface OrderSummaryProps {
  items: CartItemType[];
  couponCode: string;
  setCouponCode: (code: string) => void;
  isCouponApplied: boolean;
  onApplyCoupon: () => void;
}

export default function OrderSummary({
  items,
  couponCode,
  setCouponCode,
  isCouponApplied,
  onApplyCoupon,
}: OrderSummaryProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = isCouponApplied ? subtotal * 0.2 : 0;
  const shipping = subtotal > 150 ? 0 : 15.0;
  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal - discount + shipping + tax;

  return (
    <div className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-5 w-full">
      <h2 className="text-base font-bold text-foreground tracking-tight">Order Summary</h2>

      {/* Financial Matrix Layout */}
      <div className="flex flex-col gap-3 border-b border-default-100 pb-4">
        <div className="flex justify-between items-center text-xs text-default-500 font-medium">
          <span>Subtotal</span>
          <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        {isCouponApplied && (
          <div className="flex justify-between items-center text-xs text-success font-semibold">
            <span>Discount (20% Promo)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between items-center text-xs text-default-500 font-medium">
          <span>Shipping</span>
          <span className="text-foreground font-semibold">
            {shipping === 0 ? <span className="text-success font-bold">Free</span> : `$${shipping.toFixed(2)}`}
          </span>
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

      {/* Promotional Matrix Actions */}
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex gap-2">
         
<div className="flex gap-2">
  {/* আইকন এবং ইনপুটকে একসাথে রাখার জন্য প্রিমিয়াম রেন্ডার কন্টেইনার */}
  <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 flex-grow focus-within:border-primary transition-colors">
    <Ticket className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
    <Input
      placeholder="Promo code: SAVE20"
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)}
      disabled={isCouponApplied}
      className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400"
    />
  </div>

 
</div>
          <Button
            size="sm"
            isDisabled={isCouponApplied}
            onClick={onApplyCoupon}
            className={`font-bold text-xs rounded-xl h-9 px-4 min-w-[70px] transition-all ${
              isCouponApplied 
                ? "bg-success/20 text-success cursor-not-allowed" 
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {isCouponApplied ? "Applied" : "Apply"}
          </Button>
        </div>
      </div>

      {/* Primary Execution Context Triggers */}
      <div className="flex flex-col gap-2.5 mt-2">
      
        <Link href="/checkout">
        <Button
          size="lg"
          className="w-full font-bold text-xs rounded-xl h-11 bg-foreground text-background dark:bg-foreground dark:text-background shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span>Proceed to Checkout</span>
          <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </Button>
        </Link>
        
        <Button
          size="lg"
          variant="outline"
          className="w-full font-semibold text-xs text-default-500 hover:text-foreground border border-default-200 rounded-xl h-11 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Continue Shopping</span>
        </Button>
      </div>
    </div>
  );
}