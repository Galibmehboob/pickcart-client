"use client";

import { Menu, Globe, ShieldAlert } from "lucide-react";
import { Button } from "@heroui/react";

interface SellerHeaderProps {
  onMenuToggle: () => void;
}

export default function SellerHeader({ onMenuToggle }: SellerHeaderProps) {
  return (
    <header className="h-16 w-full border-b border-default-100/80 bg-background/50 backdrop-blur-md px-4 md:px-6 lg:px-8 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" onClick={onMenuToggle} className="lg:hidden h-9 w-9 min-w-9 p-0 rounded-xl border border-default-200 text-default-500 flex items-center justify-center">
          <Menu className="h-4 w-4" />
        </Button>
        <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-default-400">
          <ShieldAlert className="h-3.5 w-3.5 text-warning" />
          <span>Verified Merchant Domain Node</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" className="h-9 w-9 min-w-9 p-0 rounded-xl border border-default-200 text-default-500 flex items-center justify-center">
          <Globe className="h-4 w-4" />
        </Button>
        <div className="w-8 h-8 rounded-xl bg-default-100 border border-default-200/60 flex items-center justify-center text-xs font-bold text-foreground select-none">
          DV
        </div>
      </div>
    </header>
  );
}