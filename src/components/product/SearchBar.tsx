"use client";

import { ChangeEvent } from "react";
import { Input } from "@heroui/react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
  <form
    onSubmit={(e) => e.preventDefault()}
  >
    <Input
      placeholder="Search products..."
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      className="w-full"
    />
  </form>
);
}