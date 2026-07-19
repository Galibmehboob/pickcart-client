"use client";

import CartItems from "@/components/cart/CartItems";
import EmptyCart from "@/components/cart/EmptyCart";
import OrderSummary from "@/components/cart/OrderSummery";
import { useState } from "react";


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

export default function CartPage() {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // This state management serves as the structural bridge for the upcoming React Query sync
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "save20") {
      setIsCouponApplied(true);
    }
  };

  const handleInitializeDemo = (demoData: CartItemType[]) => {
    setItems(demoData);
  };

  if (items.length === 0) {
    return <EmptyCart onReset={() => handleInitializeDemo([
      {
        id: "crt-1",
        title: "AeroGlide Pro Wireless Mechanical Keyboard",
        brand: "OmniTech Labs",
        category: "Computer Accessories",
        price: 189.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
        inStock: true,
      },
      {
        id: "crt-2",
        title: "OmniPoint Ergonomic Wireless Mouse",
        brand: "OmniTech Labs",
        category: "Computer Accessories",
        price: 89.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
        inStock: true,
      }
    ])} />;
  }

  return (
    <main className="min-h-screen w-full bg-background text-foreground px-4 py-8 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Shopping Cart <span className="text-default-400 font-normal">({items.reduce((acc, curr) => acc + curr.quantity, 0)})</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-7 w-full">
            <CartItems 
              items={items} 
              onUpdateQuantity={handleUpdateQuantity} 
              onRemoveItem={handleRemoveItem} 
            />
          </div>
          <div className="lg:col-span-3 w-full lg:sticky lg:top-8">
            <OrderSummary 
              items={items}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              isCouponApplied={isCouponApplied}
              onApplyCoupon={handleApplyCoupon}
            />
          </div>
        </div>
      </div>
    </main>
  );
}