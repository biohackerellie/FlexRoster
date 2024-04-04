"use client";

import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

import { SelectUser } from "@local/db/types";
import { Message } from "@local/validators";

import { pusherClient } from "@/lib/pusher";
import { cn, toPusherKey } from "@/lib/utils";

interface MessagesProps {
  initialMessages: Message[] | undefined;
  sessionId: string;
  chatId: string;
  chatPartner: Partial<SelectUser>;
}

const Messages: React.FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatId,
  chatPartner,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages || []);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${chatId}`));

    console.log("subscribed to chat");
    const messageHandler = (message: Message) => {
      console.log("new message");
      setMessages((prev) => [message, ...prev]);
    };

    pusherClient.bind("incoming-message", messageHandler);

    return () => {
      console.log("unsubscribed from chat");
      pusherClient.unsubscribe(toPusherKey(`chat:${chatId}`));
      pusherClient.unbind("incoming-message", messageHandler);
    };
  }, [chatId]);
  const formatTimestamp = (timestamp: string | number) => {
    let time = timestamp;
    if (typeof timestamp === "string") {
      time = parseInt(timestamp);
    }
    return format(time, "h:mm a");
  };

  const scrollDownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="messages"
      className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch z-20 flex h-full flex-1 flex-col-reverse gap-4 overflow-y-auto p-3"
    >
      <div ref={scrollDownRef} />
      {messages.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId;

        const hasNextMessageFromSameUser =
          messages[index - 1]?.senderId === messages[index]?.senderId;
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
                  {message.text}{" "}
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
