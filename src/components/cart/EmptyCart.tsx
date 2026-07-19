"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@heroui/react";

interface EmptyCartProps {
  onReset: () => void;
}

export default function EmptyCart({ onReset }: EmptyCartProps) {
  return (
    <main className="min-h-[75vh] w-full bg-background text-foreground px-4 flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6 p-8 rounded-3xl border border-default-100/70 bg-default-50/10 backdrop-blur-md shadow-xl">
        {/* Architectural Geometric Floating Container */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-default-100/60 shadow-inner border border-default-200/40 text-default-400 group">
          <ShoppingBag className="h-9 w-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full ring-4 ring-background animate-pulse" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Your cart is empty
          </h2>
          <p className="text-xs text-default-400 max-w-[280px] mx-auto leading-relaxed font-medium">
            Looks like you haven,t added anything to your system architecture yet.
          </p>
        </div>

        <Button
          size="lg"
          onClick={onReset}
          className="font-bold text-xs rounded-xl h-11 px-8 bg-primary text-primary-foreground shadow-lg shadow-primary/10 active:scale-[0.98] transition-all mt-2"
        >
          Continue Shopping
        </Button>
      </div>
    </main>
  );
}