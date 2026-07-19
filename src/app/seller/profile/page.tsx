"use client";

import { motion } from "framer-motion";
import { Store, User, Mail, Phone, MapPin, Edit2 } from "lucide-react";
import { Button } from "@heroui/react";

export default function SellerProfilePage() {
  const accountInfo = {
    storeName: "Aetherial Tech Labs",
    owner: "Devon Vance",
    email: "operations@aetheriallabs.com",
    contact: "+1 (888) 901-2345",
    address: "Bldg 4, Suite 800, Silicon Valley Core, CA",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto w-full rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-6"
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-default-100 pb-5">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-tr from-warning to-warning/60 text-warning-foreground font-black text-2xl shadow-md flex-shrink-0">
          AT
        </div>
        <div className="text-center sm:text-left min-w-0">
          <h2 className="text-base font-bold text-foreground tracking-tight">{accountInfo.storeName}</h2>
          <p className="text-xs text-default-400 font-medium mt-0.5">Verified Corporate Merchant Asset</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <Store className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Store Identifier</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{accountInfo.storeName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <User className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Authorized Officer</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{accountInfo.owner}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <Mail className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Communication Vector</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{accountInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <Phone className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Telephony Link</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{accountInfo.contact}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl border border-default-100 bg-background/50">
          <MapPin className="text-default-400 h-4 w-4 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-default-400 uppercase tracking-wider">Fulfillment Depot Node</p>
            <p className="text-xs font-semibold text-foreground mt-0.5">{accountInfo.address}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <Button size="md" className="font-bold text-xs rounded-xl h-10 px-5 bg-foreground text-background dark:bg-foreground dark:text-background shadow-xs active:scale-[0.98] transition-all flex items-center gap-2">
          <Edit2 className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Edit Profile</span>
        </Button>
      </div>
    </motion.div>
  );
}