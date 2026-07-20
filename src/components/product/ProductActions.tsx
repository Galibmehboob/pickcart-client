"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { addToCart } from "@/services/api";
import { Product } from "@/types/product";

import {
  CreditCard,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
} from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductActions({
  product,
}: Props) {
  const { data: session } = authClient.useSession();

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = async () => {
    if (!session?.user) {
      toast.error("Please login first.");
      return;
    }

    try {
      await addToCart({
        userId: session.user.id,
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      });

      toast.success("Added to cart.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="mt-8 space-y-6"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-default-500">
          Quantity
        </p>

        <div className="inline-flex items-center rounded-2xl border border-default-200 bg-content1 p-1 shadow-sm">
          <Button
            isIconOnly
            variant="ghost"
            onPress={decreaseQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>

          <span className="min-w-16 text-center text-lg font-semibold">
            {quantity}
          </span>

          <Button
            isIconOnly
            variant="ghost"
            onPress={increaseQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button
          variant="outline"
          size="lg"
          className="font-semibold"
          onPress={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="font-semibold"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Buy Now
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          onPress={() =>
            setIsWishlisted((prev) => !prev)
          }
        >
          <Heart
            className={`mr-2 h-4 w-4 ${
              isWishlisted
                ? "fill-danger text-danger"
                : ""
            }`}
          />
          {isWishlisted
            ? "Wishlisted"
            : "Wishlist"}
        </Button>

        <Button variant="ghost">
          <Share2 className="mr-2 h-4 w-4" />
          Share Product
        </Button>
      </div>
    </motion.section>
  );
}