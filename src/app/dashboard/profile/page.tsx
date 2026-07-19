"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, ShieldCheck, Edit3 } from "lucide-react";
import { Button } from "@heroui/react";

export default function ProfilePage() {
  const profile = {
    name: "Alex Mercer",
    email: "alex.mercer@architecture.io",
    phone: "+1 (555) 234-5678",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl w-full rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-6"
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-default-100 pb-5">
        {/* Parametric Floating Avatar Architecture */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-tr from-primary to-primary/60 text-primary-foreground font-extrabold text-2xl shadow-md flex-shrink-0">
          AM
          <div className="absolute -bottom-1 -right-1 p-1 bg-background border border-default-200 rounded-lg text-success">
            <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
          </div>
        </div>
        
        <div className="text-center sm:text-left min-w-0">
          <h2 className="text-base font-bold text-foreground tracking-tight">{profile.name}</h2>
          <p className="text-xs text-default-400 font-medium mt-0.5">System Architect & Enterprise Client</p>
        </div>
      </div>

      {/* Identity Configuration Metadata Grid */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <User className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Full Name</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{profile.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <Mail className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Email Address</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{profile.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <Phone className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Phone Vector</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{profile.phone}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <Button
          size="md"
          className="font-bold text-xs rounded-xl h-10 px-5 bg-foreground text-background dark:bg-foreground dark:text-background shadow-xs active:scale-[0.98] transition-all flex items-center gap-2"
        >
          <Edit3 className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Edit Profile</span>
        </Button>
      </div>
    </motion.div>
  );
}