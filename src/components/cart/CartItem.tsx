"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button, Chip } from "@heroui/react";

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

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const itemSubtotal = item.price * item.quantity;

  return (
    <div className="group relative flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-default-100 bg-default-50/20 backdrop-blur-md shadow-sm hover:shadow-md transition-all w-full">
      {/* Product Image Box */}
      <div className="relative aspect-square w-full sm:w-28 rounded-xl overflow-hidden border border-default-100 bg-muted/20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 640px) 100vw, 112px"
        />
      </div>

      {/* Meta Content Flow */}
      <div className="flex flex-col flex-grow justify-between gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold tracking-wider text-primary uppercase">
                {item.brand}
              </span>
              <span className="text-default-300 text-xs">•</span>
              <span className="text-xs text-default-400 font-medium">
                {item.category}
              </span>
            </div>
            <h3 className="text-sm font-bold text-foreground tracking-tight leading-snug">
              {item.title}
            </h3>
            <div className="pt-1">
              {item.inStock ? (
                <Chip size="sm" color="success"  className="font-semibold rounded-full text-[10px] h-5">
                  In Stock
                </Chip>
              ) : (
                <Chip size="sm" color="danger"  className="font-semibold rounded-full text-[10px] h-5">
                  Out of Stock
                </Chip>
              )}
            </div>
          </div>

          <div className="text-right sm:block hidden">
            <span className="text-sm font-extrabold text-foreground block">
              ${itemSubtotal.toFixed(2)}
            </span>
            <span className="text-[11px] text-default-400 font-medium block mt-0.5">
              ${item.price.toFixed(2)} each
            </span>
          </div>
        </div>

        {/* Dynamic Interactivity Bar */}
        <div className="flex items-center justify-between border-t border-default-100/60 pt-3 mt-auto">
          <div className="inline-flex items-center rounded-xl border border-default-200 bg-background/60 p-0.5 shadow-sm">
  {/* মাইনাস (-) বাটন */}
  <Button
    isIconOnly
    size="sm"
    variant="outline"
    className="rounded-lg text-default-600 min-w-7 w-7 h-7"
    isDisabled={item.quantity <= 1} 
    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
  >
    <Minus className="h-3 w-3" />
  </Button>
  
  <span className="px-3 text-xs font-bold text-center min-w-[28px] select-none text-foreground">
    {item.quantity}
  </span>


  <Button
    isIconOnly
    size="sm"
    variant="outline"
    className="rounded-lg text-default-600 min-w-7 w-7 h-7"
    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
  >
    <Plus className="h-3 w-3" />
  </Button>
</div>
          <div className="flex items-center gap-4">
            <div className="text-right sm:hidden block">
              <span className="text-sm font-extrabold text-foreground">
                ${itemSubtotal.toFixed(2)}
              </span>
            </div>
            <Button
              isIconOnly
              size="sm"
              variant="danger"
              
              className="rounded-xl min-w-8 w-8 h-8 bg-danger-50/50 text-danger hover:bg-danger hover:text-danger-foreground transition-all"
              onClick={() => onRemoveItem(item.id)}
              aria-label="Remove item from shopping cart"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}