"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import {
  getMyOrders,
  Order,
} from "@/services/api";

export default function OrdersPage() {
  const { data: session } =
  authClient.useSession();

const [orders, setOrders] = useState<
  Order[]
>([]);

const [loading, setLoading] =
  useState(true);

  useEffect(() => {
  if (!session?.user.id) return;

  const loadOrders = async () => {
    try {
      const data = await getMyOrders(
        session.user.id
      );

      setOrders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadOrders();
}, [session]);
if (loading) {
  return (
    <div className="p-8">
      Loading...
    </div>
  );
}
if (orders.length === 0) {
  return (
    <div className="p-8 text-center">
      No orders found.
    </div>
  );
}
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl w-full overflow-hidden"
    >
      <h2 className="text-base font-bold text-foreground tracking-tight mb-5">My Orders</h2>

      {/* Responsive Structural Relational Matrix */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-default-100 text-default-400 font-bold">
              <th className="pb-3 pr-4 font-semibold">Order ID</th>
              <th className="pb-3 px-4 font-semibold">Date</th>
              <th className="pb-3 px-4 font-semibold">Items</th>
              <th className="pb-3 px-4 font-semibold">Total</th>
              <th className="pb-3 px-4 font-semibold">Status</th>
              <th className="pb-3 pl-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-default-100/60 font-medium">
            {orders.map((order) => (
              <tr key={order._id} className="text-foreground hover:bg-default-100/20 transition-colors">
                <td className="py-3.5 pr-4 font-bold">#{order._id.slice(-8).toUpperCase()}</td>
                <td className="py-3.5 px-4 text-default-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="py-3.5 px-4 text-default-500">{order.items.length} items</td>
                <td className="py-3.5 px-4 font-bold">${order.total.toFixed(2)}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                      order.status === "Completed"
                        ? "bg-success/15 text-success"
                        : order.status === "Pending"
                        ? "bg-warning/15 text-warning"
                        : "bg-danger/15 text-danger"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 rounded-lg border border-default-200 text-default-600 hover:text-foreground inline-flex items-center gap-1.5"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-bold">View Details</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}