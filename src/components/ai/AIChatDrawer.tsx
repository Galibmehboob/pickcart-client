"use client";


import { X, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { chatWithAI } from "@/services/api";
import { motion } from "framer-motion";
import TypingIndicator from "./TypingIndicator";
import AIMessage from "./AIMessage";
import SuggestedPrompts from "./SuggestedPrompts";
import { Button } from "@heroui/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AIChatDrawer({
  open,
  onClose,
}: Props) {
  const [input, setInput] = useState("");
const inputRef = useRef<HTMLInputElement>(null);
useEffect(() => {
  if (open) {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 250);
  }
}, [open]);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm PickCart AI.\n\nAsk me anything about products, recommendations or shopping.",
    },
  ]);

  const [loading, setLoading] = useState(false);

const bottomRef = useRef<HTMLDivElement>(null);

const handleSend = async (message?: string) => {
  const text = message ?? input;

if (!text.trim()) return;

const userMessage = {
  role: "user" as const,
  content: text,
};

  const updatedMessages = [
    ...messages,
    userMessage,
  ];

  setMessages(updatedMessages);

  setInput("");

  setLoading(true);

  try {
    const history = updatedMessages.map((item) => ({
      role: item.role,
      content: item.content,
    }));

    const reply = await chatWithAI(
      userMessage.content,
      history
    );

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: reply,
      },
    ]);
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Sorry, something went wrong. Please try again.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};

const handlePrompt = (text: string) => {
  void handleSend(text);
}; 

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);
  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}

     <motion.div
  initial={{
    x: 450,
    opacity: 0,
  }}
  animate={{
    x: 0,
    opacity: 1,
  }}
  exit={{
    x: 450,
    opacity: 0,
  }}
  transition={{
    duration: 0.3,
  }}
  className="fixed bottom-6 right-6 z-50 flex h-[650px] w-[380px] max-w-[95vw] flex-col overflow-hidden rounded-3xl border border-default-200 bg-background shadow-2xl"
>
        {/* Header */}

        <div className="flex items-center justify-between border-b border-default-200 px-5 py-4">

          <div>

            <h2 className="text-lg font-bold">
              PickCart AI
            </h2>

            <p className="text-xs text-default-500">
              Shopping Assistant
            </p>

          </div>
<div className="flex items-center gap-2">

  <Button
    size="sm"
    variant="outline"
    onPress={() =>
      setMessages([
        {
          role: "assistant",
          content:
            "👋 Hello! I'm PickCart AI.\n\nHow can I help you today?",
        },
      ])
    }
  >
    Clear
  </Button>

  <Button
    isIconOnly
    variant="outline"
    onPress={onClose}
  >
    <X size={18}/>
  </Button>

</div>
          

        </div>

        

        {/* Messages */}
<div className="flex-1 space-y-4 overflow-y-auto p-4">

  {messages.map((message, index) => (
    <AIMessage
      key={index}
      role={message.role}
      content={message.content}
    />
  ))}

  {loading && <TypingIndicator />}

  <div ref={bottomRef} />

</div>

        {/* Suggestions */}

        <div className=" border border-default-300 bg-content1 px-3 py-2 text-xs text-foreground hover:bg-default-100">
{messages.length === 1 && (
  <div className="px-4 pb-3 text-xs text-default-500">
    Popular questions
  </div>
)}
        {messages.length === 1 && (
  <SuggestedPrompts
    onSelect={handlePrompt}
  />
)}

        </div>

        {/* Input */}

     <div className="border-t border-default-200 bg-content1 p-4">
<div className="flex items-center gap-2">

          <input
            value={input}
            ref={inputRef}
            disabled={loading}
            onChange={(e) =>
              setInput(e.target.value)
            }
            
           onKeyDown={(e) => {
  if (e.key === "Enter") {
    void handleSend();
  }
}}
          placeholder="Ask about products, price or recommendations..."
          className="flex-1 rounded-xl border border-default-300 bg-background px-4 py-3 text-foreground outline-none"
          />

          <button
disabled={loading || !input.trim()}
          onClick={() => {
    void handleSend();
  }}
           
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
loading || !input.trim()
? "bg-default-300 cursor-not-allowed"
: "bg-primary text-white hover:scale-105"
}`}
          >
            <Send size={18} />
          </button>
</div>

        </div>

      </motion.div>
    </>
  );
}