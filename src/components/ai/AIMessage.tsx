"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Bot, Copy, User } from "lucide-react";
import { toast } from "sonner";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function AIMessage({
  role,
  content,
}: Props) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex max-w-[90%] items-end gap-3">
        {/* AI Avatar */}
        {!isUser && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <Bot size={18} />
          </div>
        )}

        {/* Message */}
        <div className="flex flex-col">
          <div
            className={`rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
              isUser
                ? "bg-primary text-white"
                : "bg-default-100 text-foreground"
            }`}
          >
            {content}
          </div>

          
          {!isUser && (
            <Button
              size="sm"
              variant="outline"
              className="mt-1 w-fit"
              onPress={() => {
                navigator.clipboard.writeText(content);
                toast.success("Copied");
              }}
            >
              <Copy size={14} className="mr-1" />
              Copy
            </Button>
          )}
        </div>

        {/* User Avatar */}
        {isUser && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-default-200">
            <User size={18} />
          </div>
        )}
      </div>
    </motion.div>
  );
}