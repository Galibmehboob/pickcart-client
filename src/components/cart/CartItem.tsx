"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@heroui/react";

import { CartItem as CartType } from "@/services/api";

interface CartItemProps {
  item: CartType;
  onUpdateQuantity: (
    id: string,
    quantity: number
  ) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemoveItem,
}: CartItemProps) {
  const price = Number(item.price);

  const subtotal =
    price * Number(item.quantity);

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-default-200 p-4 sm:flex-row">
      <div className="relative h-28 w-28 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          unoptimized
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-default-500">
            ${price.toFixed(2)} each
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              isIconOnly
              size="sm"
              variant="outline"
              isDisabled={item.quantity <= 1}
              onPress={() =>
                onUpdateQuantity(
                  item._id!,
                  item.quantity - 1
                )
              }
            >
              <Minus size={14} />
            </Button>

            <span className="w-8 text-center font-semibold">
              {item.quantity}
            </span>

            <Button
              isIconOnly
              size="sm"
              variant="outline"
              onPress={() =>
                onUpdateQuantity(
                  item._id!,
                  item.quantity + 1
                )
              }
            >
              <Plus size={14} />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">
              ${subtotal.toFixed(2)}
            </span>

            <Button
              isIconOnly
            
              variant="danger"
              onPress={() =>
                onRemoveItem(item._id!)
              }
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}