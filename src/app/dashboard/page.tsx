"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Clock, CheckCircle2, Eye } from "lucide-react";
import { Button } from "@heroui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function DashboardOverview() {
    const stats = [
        { title: "Total Orders", value: "24", icon: ShoppingBag, color: "text-primary bg-primary/10" },
        { title: "Pending Orders", value: "3", icon: Clock, color: "text-warning bg-warning/10" },
        { title: "Completed Orders", value: "21", icon: CheckCircle2, color: "text-success bg-success/10" },
    ];

    const recentOrders = [
        { id: "ORD-9982", date: "2026-07-18", total: "$129.99", status: "Completed" },
        { id: "ORD-9981", date: "2026-07-16", total: "$89.50", status: "Pending" },
        { id: "ORD-9980", date: "2026-07-12", total: "$45.00", status: "Completed" },
    ];

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Welcome Card */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-default-100 bg-linear-to-r from-default-100/50 to-default-50/20 backdrop-blur-md p-6 shadow-xs"
            >
                <h1 className="text-xl font-bold tracking-tight text-foreground">Welcome back, Alex!</h1>
                <p className="text-xs text-default-400 mt-1 font-medium">
                    Here is what is happening with your system architectures and orders today.
                </p>
            </motion.div>

            {/* Numerical Metrics Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                    <DashboardCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        iconColor={stat.color}
                        delay={idx * 0.05}
                    />
                ))}
            </div>

            {/* Recent Activity Pipeline */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-sm"
            >
                <h2 className="text-sm font-bold text-foreground tracking-tight mb-4">Recent Orders</h2>
                <div className="flex flex-col gap-3">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between p-3 rounded-xl border border-default-100 bg-background/40 hover:bg-background/80 transition-colors gap-2"
                        >
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-foreground">{order.id}</p>
                                <p className="text-[10px] text-default-400 font-medium mt-0.5">{order.date}</p>
                            </div>
                            <div className="flex items-center gap-4 flex-shrink-0">
                                <span className="text-xs font-extrabold text-foreground">{order.total}</span>
                                <span
                                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.status === "Completed" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
                                        }`}
                                >
                                    {order.status}
                                </span>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-default-500 hover:text-foreground flex items-center justify-center"
                                >
                                    <Eye className="h-3.5 w-3.5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}