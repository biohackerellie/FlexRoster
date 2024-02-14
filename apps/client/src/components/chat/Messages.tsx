"use client";

import * as React from "react";
import Image from "next/image";
import { format, set } from "date-fns";

import { client } from "@local/eden";
import { Message } from "@local/validators";

import { cn } from "@/lib/utils";

interface MessagesProps {
  initialMessages: Message[];
  sessionId: string;
  chatId: string;
  email: string;
  sessionImg: string | null | undefined;
  from: string;
}

const Messages: React.FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatId,
  email,
  sessionImg,
  from,
}) => {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const chat = client.api.sockets.chat.subscribe();

  React.useEffect(() => {
    chat.subscribe((message) => {
      const data: Message = JSON.parse(message.data);
      setMessages((prev) => [...(prev ?? []), data]);
    });
    return () => {
      chat.close();
    };
  }, [chat, email]);

  const scrollDownRef = React.useRef<HTMLDivElement | null>(null);

  const formatTimestamp = (timestamp: number) => {
    return format(timestamp, "HH:mm");
  };

  return (
    <div
      id="messages"
      className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex h-full flex-1 flex-col-reverse gap-4 overflow-y-auto p-3"
    >
      <div ref={scrollDownRef} />
      {messages.map((message, index) => {
        const isCurrentUser = message.from === email;
        const hasNextMessageFromSameUser =
          messages[index - 1]?.from === messages[index]?.from;
        return (
          <div
            className="chat-message"
            key={`${message.id}-${message.timestamp}`}
          >
            <div
              className={cn("flex items-end", {
                "justify-end": isCurrentUser,
              })}
            >
              <div
                className={cn(
                  "mx-2 flex max-w-xs flex-col space-y-2 text-base",
                  {
                    "order-1 items-end": isCurrentUser,
                    "order-2 items-start": !isCurrentUser,
                  },
                )}
              >
                <span
                  className={cn("inline-block rounded-lg px-4 py-2", {
                    "bg-indigo-600 text-white": isCurrentUser,
                    "bg-gray-200 text-gray-900": !isCurrentUser,
                    "rounded-br-none":
                      !hasNextMessageFromSameUser && isCurrentUser,
                    "rounded-bl-none":
                      !hasNextMessageFromSameUser && !isCurrentUser,
                  })}
                >
                  {message.message}{" "}
                  <span className="ml-2 text-xs text-gray-400">
                    {formatTimestamp(message.timestamp)}
                  </span>
                </span>
              </div>

              <div
                className={cn("relative h-6 w-6", {
                  "order-2": isCurrentUser,
                  "order-1": !isCurrentUser,
                  invisible: hasNextMessageFromSameUser,
                })}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
