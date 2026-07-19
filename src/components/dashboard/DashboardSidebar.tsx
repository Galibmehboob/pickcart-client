"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, User, LogOut, X } from "lucide-react";
import { Button } from "@heroui/react";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <>
      {/* Mobile Backplane Interceptor */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-default-50/40 backdrop-blur-xl border-r border-default-100/80 p-5 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Sidebar Architecture Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-black text-sm tracking-tight uppercase">
              <span className="w-2.5 h-2.5 bg-primary rounded-xs" />
              <span>Core Engine</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={onClose}
              className="lg:hidden h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-default-400 hover:text-foreground flex items-center justify-center"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Navigation Matrix */}
          <nav className="flex flex-col gap-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => onClose()}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs shadow-primary/10"
                      : "text-default-500 hover:text-foreground hover:bg-default-100/40"
                  }`}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Global Structural Evacuation Control */}
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-danger hover:bg-danger/10 transition-colors w-full text-left mt-auto"
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}