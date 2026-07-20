"use client";

import { useEffect, useState } from "react";

import { authClient } from "@/lib/auth-client";
import {
  getCart,
  removeCart,
  updateCart,
  CartItem,
} from "@/services/api";

import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummery";
import EmptyCart from "@/components/cart/EmptyCart";

import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] =
    useState(false);

  useEffect(() => {
    async function loadCart() {
      if (!session?.user) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCart(session.user.id);
        setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, [session]);

  const handleUpdateQuantity = async (
    id: string,
    quantity: number
  ) => {
    try {
      await updateCart(id, quantity);

      setItems((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveItem = async (id: string) => {
    try {
      await removeCart(id);

      setItems((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "save20") {
      setIsCouponApplied(true);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!items.length) {
    return (
      <EmptyCart
        onReset={() => router.push("/products")}
      />
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">
          Shopping Cart (
          {items.reduce(
            (acc, item) => acc + Number(item.quantity),
            0
          )}
          )
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
          <div className="lg:col-span-7">
            <CartItems
              items={items}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>

          <div className="lg:col-span-3">
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