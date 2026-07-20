"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Info,
  Tag,
  DollarSign,
  Layers,
} from "lucide-react";
import { Button, Input } from "@heroui/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/imageUpload";

import type { Product } from "@/types/product";

interface Props {
  id: string;
}

export default function EditProductForm({
  id,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

const [imageUploading, setImageUploading] = useState(false);
  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`
        );

        if (!response.ok) {
          toast.error("Product not found.");
          router.push("/seller/products");
          return;
        }

        const data = await response.json();

        const product: Product = data.data;

        setName(product.name);
        setCategory(product.category);
        setBrand(product.brand || "");
        setPrice(String(product.price));
        setDiscountPrice(String(product.discountPrice || ""));
        setStock(String(product.stock));
        setImage(product.image);
        setDescription(product.description || "");
      } catch (error) {
        console.log(error);
        toast.error("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    void loadProduct();
  }, [id, router]);

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const payload = {
        name,
        category,
        brand,
        price: Number(price),
        discountPrice: Number(discountPrice),
        stock: Number(stock),
        image,
        description,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to update product.");
        return;
      }

      toast.success("Product updated successfully.");

      router.push("/seller/products");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto w-full rounded-2xl border border-default-100 bg-default-50/30 backdrop-blur-md p-6 shadow-xl flex flex-col gap-6"
    >
      <div className="border-b border-default-100 pb-4">
        <h1 className="text-base font-bold text-foreground tracking-tight">
          Edit Product
        </h1>

        <p className="text-[11px] text-default-400 font-medium mt-0.5">
          Update your product information.
        </p>
      </div>

      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Product Title
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Tag className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Category
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Layers className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Brand Label
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <Info className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Base Price
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Discount Price
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <DollarSign className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                type="number"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Stock
            </label>

            <div className="flex items-center gap-2 border border-default-200 h-9 bg-background/50 rounded-xl px-3 focus-within:border-primary transition-colors">
              <PlusCircle className="text-default-400 h-3.5 w-3.5 flex-shrink-0" />

              <Input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full bg-transparent text-xs outline-none border-none focus:ring-0 p-0"
              />
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
            <label className="text-[11px] font-bold text-default-500 uppercase tracking-wider">
              Description
            </label>

            <div className="flex items-start gap-2 border border-default-200 min-h-24 bg-background/50 rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-transparent text-xs outline-none resize-none min-h-20"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            isDisabled={updating}
            size="md"
            className="font-bold text-xs rounded-xl h-10 px-6 bg-foreground text-background dark:bg-foreground dark:text-background shadow-md transition-transform active:scale-[0.98]"
          >
            {updating ? "Updating..." : "Update Product"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}