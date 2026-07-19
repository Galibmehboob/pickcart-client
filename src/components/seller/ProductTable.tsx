"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@heroui/react";

export default function ProductTable() {
  const inventoryData = [
    { id: "p-1", name: "AeroGlide Pro Keyboard", category: "Electronics", price: "$189.99", stock: 24, status: "Active", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=150&auto=format&fit=crop" },
    { id: "p-2", name: "OmniPoint Ergonomic Mouse", category: "Electronics", price: "$89.99", stock: 0, status: "Out of Stock", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=150&auto=format&fit=crop" },
    { id: "p-3", name: "Executive Lumbar Support", category: "Office Furniture", price: "$59.00", stock: 4, status: "Low Stock", img: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=150&auto=format&fit=crop" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl w-full overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <h2 className="text-base font-bold text-foreground tracking-tight">Active Inventory Ledger</h2>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-default-100 text-default-400 font-bold">
              <th className="pb-3 pr-4 font-semibold w-12">Image</th>
              <th className="pb-3 px-4 font-semibold">Product Name</th>
              <th className="pb-3 px-4 font-semibold">Category</th>
              <th className="pb-3 px-4 font-semibold">Price</th>
              <th className="pb-3 px-4 font-semibold">Stock</th>
              <th className="pb-3 px-4 font-semibold">Status</th>
              <th className="pb-3 pl-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-default-100/60 font-medium">
            {inventoryData.map((item) => (
              <tr key={item.id} className="text-foreground hover:bg-default-100/20 transition-colors">
                <td className="py-3 pr-4">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-default-200 bg-default-100">
                    <Image src={item.img} alt={item.name} fill unoptimized className="object-cover" />
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-foreground max-w-[160px] truncate">{item.name}</td>
                <td className="py-3 px-4 text-default-500">{item.category}</td>
                <td className="py-3 px-4 font-extrabold text-foreground">{item.price}</td>
                <td className="py-3 px-4 text-default-500">{item.stock} units</td>
                <td className="py-3 px-4">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    item.status === "Active" ? "bg-success/15 text-success" : item.status === "Low Stock" ? "bg-warning/15 text-warning" : "bg-danger/15 text-danger"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 pl-4 text-right">
                  <div className="inline-flex items-center gap-1.5">
                    <Button size="sm" variant="outline" className="h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-default-600 hover:text-foreground flex items-center justify-center">
                      <Edit className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-danger hover:bg-danger/10 flex items-center justify-center">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}