"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import {
  PlusCircle,
  Info,
  Tag,
  DollarSign,
  Layers,
} from "lucide-react";

import { Button, Input } from "@heroui/react";

import { useSession } from "@/hooks/useSession";
import { toast } from "sonner";
import { uploadImage } from "@/lib/imageUpload";

export default function AddProductPage() {
  const router = useRouter();

const { user } = useSession();

const [loading, setLoading] = useState(false);
const [image, setImage] = useState("");
const [imageUploading, setImageUploading] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  category: "",
  brand: "",
  price: "",
  discountPrice: "",
  stock: "",
  image: "",
  description: "",
});

const handleChange = (
  field: keyof typeof formData,
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sellerId: user?.id,
          sellerEmail: user?.email,
          status: "Active",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    router.push("/seller/products");

    router.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto w-full rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-6"
    >
      <div className="border-b border-default-100 pb-4">
        <h1 className="text-base font-bold text-foreground tracking-tight">Add New Product</h1>
        <p className="text-[11px] text-default-400 font-medium mt-0.5">Deploy a new commercial entity to your active storefront catalog.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Product Title</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Tag className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="e.g. Aura Pro Soundbar" 
              value={formData.name}

onChange={(e) =>
handleChange("name", e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Category</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Layers className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="Electronics, Fashion, Home" 
              value={formData.category}

onChange={(e)=>
handleChange("category",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Brand Label</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Info className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="e.g. Sony, Logitech"  
              value={formData.brand}

onChange={(e)=>
handleChange("brand",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Base Price (USD)</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="0.00" 
              value={formData.price}

onChange={(e)=>
handleChange("price",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Discount Settlement Price</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="0.00" 
              value={formData.discountPrice}

onChange={(e)=>
handleChange("discountPrice",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Stock Allocation Volume</label>
            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <PlusCircle className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />
              <Input placeholder="Available inventory count" 
              value={formData.stock}

onChange={(e)=>
handleChange("stock",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400" />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
  <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
    Product Image
  </label>

  <Input
    type="file"
    accept="image/*"
    onChange={async (e) => {
      const file = e.target.files?.[0];

      if (!file) return;

      try {
        setImageUploading(true);

        const url = await uploadImage(file);

        setImage(url);

        toast.success("Image uploaded successfully.");
      } catch (error) {
        console.log(error);

        toast.error("Image upload failed.");
      } finally {
        setImageUploading(false);
      }
    }}
  />

  {image && (
    <img
      src={image}
      alt="Preview"
      className="h-32 w-32 rounded-xl border object-cover"
    />
  )}
</div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">Product Narrative Description</label>
            <div className="flex items-start gap-2 border border-default-200 min-h-24 bg-background/50 rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
              <textarea placeholder="Outline comprehensive specifications, parameters, and functional capabilities..." 
              value={formData.description}

onChange={(e)=>
handleChange("description",e.target.value)
}
              className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0 text-foreground placeholder:text-default-400 resize-none min-h-20" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
         <Button
type="submit"
isDisabled={loading}
size="md"
className="font-bold text-xs rounded-xl h-10 px-6 bg-foreground text-background dark:bg-foreground dark:text-background shadow-md transition-transform active:scale-[0.98]"
>
{loading ? "Publishing..." : "Publish Asset"}
</Button>
        </div>
      </form>
    </motion.div>
  );
}