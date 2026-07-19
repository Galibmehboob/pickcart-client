"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, PlusCircle, ShoppingBag, User, LogOut, X } from "lucide-react";
import { Button } from "@heroui/react";

interface SellerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerSidebar({ isOpen, onClose }: SellerSidebarProps) {
  const currentPath = usePathname();

  const menuMatrix = [
    { name: "Overview", href: "/seller", icon: LayoutDashboard },
    { name: "Products", href: "/seller/products", icon: Package },
    { name: "Add Product", href: "/seller/products/add", icon: PlusCircle },
    { name: "Orders", href: "/seller/orders", icon: ShoppingBag },
    { name: "Profile", href: "/seller/profile", icon: User },
  ];

  return (
    <>
      {isOpen && <div onClick={onClose} className="fixed inset-0 z-40 bg-background/40 backdrop-blur-xs lg:hidden" />}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-default-50/40 backdrop-blur-xl border-r border-default-100/80 p-5 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-black text-sm tracking-tight uppercase">
              <span className="w-2.5 h-2.5 bg-warning rounded-xs" />
              <span>Merchant Core</span>
            </div>
            <Button size="sm" variant="outline" onClick={onClose} className="lg:hidden h-7 w-7 min-w-7 p-0 rounded-lg border border-default-200 text-default-400 flex items-center justify-center">
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-1.5">
            {menuMatrix.map((item) => {
              const activeNode = currentPath === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => onClose()}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeNode ? "bg-warning text-warning-foreground shadow-xs shadow-warning/10" : "text-default-500 hover:text-foreground hover:bg-default-100/40"
                  }`}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <button type="button" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-danger hover:bg-danger/10 transition-colors w-full text-left mt-auto">
          <LogOut className="h-4 w-4 flex-shrink-0" />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}