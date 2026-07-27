"use client";

import { MessageCircle } from "lucide-react";

interface Props {
  onOpen: () => void;
}

export default function AIChatButton({
  onOpen,
}: Props) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-white shadow-xl transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </button>
  );
}