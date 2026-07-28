"use client";


import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { getCart, placeOrder } from "@/services/api";
import { toast } from "sonner";
import type { CartItem } from "@/services/api";

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
  const { data: session } = authClient.useSession();

const [cartItems, setCartItems] =
  useState<CartItem[]>([]);
const [loading, setLoading] = useState(true);
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

 const handlePlaceOrder = async () => {
  if (!session?.user) return;

  try {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await placeOrder({
      userId: session.user.id,

      customer: formData,

   items: cartItems.map((item) => ({
  productId: item.productId,
  sellerId: item.sellerId,
  sellerEmail: item.sellerEmail,
  name: item.name,
  image: item.image,
  price: item.price,
  quantity: item.quantity,
})),

      total,

      paymentMethod: formData.paymentMethod,
    });

    toast.success("Order placed successfully.");

    router.push("/dashboard/orders");
  } catch (error) {
    console.error(error);

    toast.error("Failed to place order.");
  }
};

  const router = useRouter();



useEffect(() => {
  const loadCart = async () => {
    if (!session?.user) return;

    try {
      const cart = await getCart(session.user.id);

      setCartItems(cart);
    } finally {
      setLoading(false);
    }
  };

  loadCart();
}, [session]);

  return (
    <main className="min-h-screen w-full bg-background text-foreground px-4 py-8 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-6 w-full">
            <CheckoutForm formData={formData} onInputChange={handleInputChange} />
          </div>
          <div className="lg:col-span-4 w-full lg:sticky lg:top-8">
            <OrderSummary
  items={cartItems}
  loading={loading}
  onPlaceOrder={handlePlaceOrder}
/>
          </div>
        </div>
      </div>
    </main>
  );
}