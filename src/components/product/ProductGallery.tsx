"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  title: string;
  images?: string[];
}

export default function ProductGallery({
  title,
  images = [],
}: ProductGalleryProps) {
  const galleryImages = useMemo(() => {
    const validImages = images.filter(
      (img) => typeof img === "string" && img.trim() !== ""
    );

    return validImages.length
      ? validImages
      : ["/placeholder.jpg"];
  }, [images]);

  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="flex flex-col gap-5 lg:sticky lg:top-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-square overflow-hidden rounded-3xl border bg-content1 shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.45 : 1,
          }}
          transition={{
            duration: 0.25,
          }}
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
          className="relative h-full w-full"
        >
          <Image
            src={galleryImages[activeImage]}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px)100vw,55vw"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`relative aspect-square overflow-hidden rounded-2xl border transition-all ${
              activeImage === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-default-200 hover:border-primary/50"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition duration-300 hover:scale-110"
              sizes="120px"
            />
          </button>
        ))}
      </div>
    </section>
  );
}