"use client";

import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem";
import { CartItem as CartType } from "@/services/api";



interface CartItemsProps {
  items: CartType[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartItems({ items, onUpdateQuantity, onRemoveItem }: CartItemsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item._id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30, 
              opacity: { duration: 0.2 } 
            }}
            className="w-full"
          >
            <CartItem 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
              onRemoveItem={onRemoveItem} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}