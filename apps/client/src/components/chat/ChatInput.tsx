"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import { SelectUser } from "@local/db/types";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

interface ChatInputProps {
  chatPartner: Partial<SelectUser>;
  chatId: string;
  userId: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ chatPartner, chatId }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>("");

  const sendMessage = async () => {
    if (!input) return;
    setIsLoading(true);

    try {
      await axios.post("/api/message/send", {
        text: input,
        chatId,
      });
      setInput("");
      textareaRef.current?.focus();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mb-2 border-t px-4 pt-4 sm:mb-0">
      <div className="relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${chatPartner.name}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage;
            }
          }}
          rows={1}
          className="sm:leading-0 block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm"
        />
        <div
          onClick={() => textareaRef.current?.focus()}
          className="py-2"
          aria-hidden="true"
        >
          <div className="py-px">
            <div className="h-9" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex justify-between py-2 pl-3 pr-2">
          <div className="flex-shrink-0">
            <Button loading={isLoading} onClick={sendMessage} type="submit">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
