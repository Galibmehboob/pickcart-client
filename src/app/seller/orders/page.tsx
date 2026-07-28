"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getSellerOrders } from "@/services/api";
import { Eye } from "lucide-react";
import { Button } from "@heroui/react";

interface Order {
  _id: string;
  userId: string;
  total: number;
  status: string;
  createdAt: string;

  customer: {
    fullName: string;
    phone: string;
  };

  items: {
    productId: string;
    sellerId: string;
    sellerEmail: string;
    name: string;
    quantity: number;
    price: number;
  }[];
}

export default function SellerOrdersPage() {
  const { data: session } = authClient.useSession();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!session?.user) return;

    const load = async () => {
      const data = await getSellerOrders(
        session.user.id
      );

      setOrders(data);
    };

    load();
  }, [session]);

  return (
    <div className="rounded-2xl border p-6">
      <h1 className="text-xl font-bold mb-6">
        Customer Orders
      </h1>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.customer.fullName}</td>

              <td>{order.customer.phone}</td>

              <td>${order.total}</td>

              <td>{order.status}</td>

              <td>
                <Button
                  isIconOnly
                  variant="outline"
                >
                  <Eye size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}