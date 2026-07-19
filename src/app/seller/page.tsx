"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Package, DollarSign, AlertTriangle } from "lucide-react";
import SellerStats from "@/components/seller/SellerStats";

export default function SellerOverview() {
  const stats = [
    { title: "Total Products", value: "148", icon: Package, color: "text-primary bg-primary/10" },
    { title: "Total Orders", value: "1,240", icon: ShoppingBag, color: "text-success bg-success/10" },
    { title: "Total Revenue", value: "$42,850.00", icon: DollarSign, color: "text-warning bg-warning/10" },
    { title: "Low Stock Products", value: "7", icon: AlertTriangle, color: "text-danger bg-danger/10" },
  ];

  const recentOrders = [
    { id: "ORD-5432", customer: "Sophia Martinez", amount: "$299.00", status: "Processing" },
    { id: "ORD-5431", customer: "Liam Johnson", amount: "$45.50", status: "Delivered" },
    { id: "ORD-5430", customer: "Emma Watson", amount: "$120.00", status: "Delivered" },
  ];

  const recentProducts = [
    { name: "Quantum Wireless Mouse", category: "Electronics", price: "$69.00", stock: 45 },
    { name: "Ergonomic Lumbar Cushion", category: "Office", price: "$39.99", stock: 3 },
    { name: "HyperCharge GaN Charger", category: "Accessories", price: "$49.00", stock: 82 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-default-100 bg-linear-to-r from-default-100/50 to-default-50/20 backdrop-blur-md p-6 shadow-xs"
      >
        <h1 className="text-xl font-bold tracking-tight text-foreground">Merchant Hub</h1>
        <p className="text-xs text-default-400 mt-1 font-medium">
          Monitor your storefront operations, logistics metrics, and financial performance vectors.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <SellerStats
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.color}
            delay={idx * 0.05}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
        >
          <h2 className="text-sm font-bold text-foreground tracking-tight">Recent Sales Operations</h2>
          <div className="flex flex-col gap-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 rounded-xl border border-default-100 bg-background/40 gap-2 text-xs">
                <div>
                  <p className="font-bold text-foreground">{order.id}</p>
                  <p className="text-[10px] text-default-400 font-medium mt-0.5">{order.customer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-foreground">{order.amount}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${order.status === "Delivered" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Products Queue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-sm flex flex-col gap-4"
        >
          <h2 className="text-sm font-bold text-foreground tracking-tight">Recently Added Inventory</h2>
          <div className="flex flex-col gap-3">
            {recentProducts.map((product) => (
              <div key={product.name} className="flex items-center justify-between p-3 rounded-xl border border-default-100 bg-background/40 gap-2 text-xs">
                <div className="min-w-0">
                  <p className="font-bold text-foreground truncate">{product.name}</p>
                  <p className="text-[10px] text-default-400 font-medium mt-0.5">{product.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-extrabold text-foreground">{product.price}</p>
                  <p className={`text-[9px] font-bold mt-0.5 ${product.stock <= 5 ? "text-danger" : "text-default-400"}`}>
                    {product.stock} units
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}