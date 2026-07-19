"use client";

import { Menu, Bell, Shield } from "lucide-react";
import { Button } from "@heroui/react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

export default function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
  return (
    <header className="h-16 w-full border-b border-default-100/80 bg-background/50 backdrop-blur-md px-4 md:px-6 lg:px-8 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="outline"
          onClick={onMenuToggle}
          className="lg:hidden h-9 w-9 min-w-9 p-0 rounded-xl border border-default-200 text-default-500 hover:text-foreground flex items-center justify-center"
        >
          <Menu className="h-4 w-4" />
        </Button>
        <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-default-400">
          <Shield className="h-3.5 w-3.5 text-primary" />
          <span>Secure Framework Environment</span>
        </div>
      </div>

      {/* Global State Context Indicators */}
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="outline"
          className="h-9 w-9 min-w-9 p-0 rounded-xl border border-default-200 text-default-500 hover:text-foreground flex items-center justify-center relative"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full" />
        </Button>
        <div className="w-8 h-8 rounded-xl bg-default-100 flex items-center justify-center text-xs font-bold text-foreground border border-default-200/60 select-none">
          AM
          </div>
      </div>
    </header>
  );
}