"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@heroui/react";
import type { Product } from "@/types/product";
import { useSession } from "@/hooks/useSession";
import Link from "next/link";

export default function ProductTable() {
 const { user } = useSession();

const [loading, setLoading] = useState(false);
const [inventoryData, setInventoryData] = useState<Product[]>([]);


const userId = user?.id;

useEffect(() => {
  if (!userId) return;

  async function loadProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/seller/${userId}`
      );

      const data = await response.json();

      setInventoryData(data.data ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  void loadProducts();
}, [userId]);

const handleDelete = async (id: string) => {
  const ok = confirm("Delete this product?");

  if (!ok) return;

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    setInventoryData((prev) =>
      prev.filter((item) => item._id !== id)
    );
  } catch (error) {
    console.log(error);
  }
};

if (loading) {
  return (
    <div className="flex items-center justify-center py-20">
      Loading...
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
              <tr key={item._id} className="text-foreground hover:bg-default-100/20 transition-colors">
                <td className="py-3 pr-4">
  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-default-200 bg-default-100">
    {item.image ? (
      <Image
        src={item.image}
        alt={item.name}
        fill
        unoptimized
        className="object-cover"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center text-[9px] text-default-400">
      <div className="overflow-hidden rounded-lg">
 <Image
  src={item.image || "/placeholder.jpg"}
  alt={item.name}
  width={64}
  height={64}
  unoptimized
  className="h-16 w-16 rounded-lg object-cover"
/>
</div>
      </div>
    )}
  </div>
</td>
                <td className="py-3 px-4 font-bold text-foreground max-w-[160px] truncate">{item.name}</td>
                <td className="py-3 px-4 text-default-500">{item.category}</td>
                <td className="py-3 px-4 font-extrabold text-foreground">${item.price}</td>
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
    <Link href={`/seller/products/edit/${item._id}`}>
      <Button
        size="sm"
        variant="outline"
        className="h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-default-600 hover:text-foreground flex items-center justify-center"
      >
        <Edit className="h-3.5 w-3.5" />
      </Button>
    </Link>

    <Button
      size="sm"
      variant="outline"
      onPress={() => handleDelete(item._id)}
      className="h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-danger hover:bg-danger/10 flex items-center justify-center"
    >
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