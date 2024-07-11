"use client";

import * as React from "react";
import axios from "axios";
import { toast } from "sonner";

import type { SelectUser } from "@local/db";
import { Button } from "@local/ui/button";
import { Textarea } from "@local/ui/textarea";

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
       const res = await axios.post("/api/message/send", {
        text: input,
        chatId,
      });
      if(res.status === 202){
        toast.error(res.data)
        
      };
      setInput("");
      textareaRef.current?.focus();
    } catch (error) {
      
     if(error instanceof Error) 
      toast.error( error.message);
      
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="z-20 mb-2 border-t px-4 pt-4 sm:mb-0">
      <div className="relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${chatPartner.name}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void sendMessage();
            }
          }}
          rows={1}
          className="sm:leading-0 block w-full resize-none border-0 bg-transparent text-primary placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm"
        />
        <div
          onClick={() => textareaRef.current?.focus()}
          className="hidden py-2"
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
