"use client";

import { motion } from "framer-motion";

export default function SellerOrdersPage() {
  const transactionalData = [
    { id: "ORD-9201", user: "Sophia Martinez", items: "Quantum Mouse x1", sum: "$69.00", payment: "Stripe", status: "Processing", timestamp: "2026-07-19" },
    { id: "ORD-9202", user: "Liam Johnson", items: "GaN Charger x2", sum: "$98.00", payment: "PayPal", status: "Completed", timestamp: "2026-07-18" },
    { id: "ORD-9203", user: "Emma Watson", items: "Lumbar Cushion x1", sum: "$39.99", payment: "Stripe", status: "Completed", timestamp: "2026-07-17" },
    { id: "ORD-9204", user: "Marcus Aurelius", items: "Carbon mechanical KB x1", sum: "$189.99", payment: "Apple Pay", status: "Cancelled", timestamp: "2026-07-15" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl w-full overflow-hidden"
    >
      <h2 className="text-base font-bold text-foreground tracking-tight mb-5">Order Inflow Registry</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-default-100 text-default-400 font-bold">
              <th className="pb-3 pr-4 font-semibold">Customer</th>
              <th className="pb-3 px-4 font-semibold">Manifest Line Items</th>
              <th className="pb-3 px-4 font-semibold">Net Value</th>
              <th className="pb-3 px-4 font-semibold">Gateway</th>
              <th className="pb-3 px-4 font-semibold">Fulfillment Status</th>
              <th className="pb-3 pl-4 font-semibold text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-default-100/60 font-medium">
            {transactionalData.map((tx) => (
              <tr key={tx.id} className="text-foreground hover:bg-default-100/20 transition-colors">
                <td className="py-3.5 pr-4">
                  <p className="font-bold text-foreground">{tx.user}</p>
                  <p className="text-[10px] text-default-400 font-medium">{tx.id}</p>
                </td>
                <td className="py-3.5 px-4 text-default-500 max-w-[180px] truncate">{tx.items}</td>
                <td className="py-3.5 px-4 font-extrabold text-foreground">{tx.sum}</td>
                <td className="py-3.5 px-4 text-default-400 font-semibold">{tx.payment}</td>
                <td className="py-3.5 px-4">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    tx.status === "Completed" ? "bg-success/15 text-success" : tx.status === "Processing" ? "bg-warning/15 text-warning" : "bg-danger/15 text-danger"
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-right text-default-500">{tx.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}