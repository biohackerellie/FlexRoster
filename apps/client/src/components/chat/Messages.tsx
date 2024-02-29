"use client";

import React, { useEffect, useOptimistic, useRef, useState } from "react";
import { format, set } from "date-fns";

import { client } from "@local/eden";
import { pusherClient } from "@local/pusher";
import { Message, messageValidator } from "@local/validators";

import { cn, toPusherKey } from "@/lib/utils";

type cacheUser = {
  name: string;
  role: string;
};

interface MessagesProps {
  initialMessages: Message[];
  sessionId: string;
  chatId: string;
  chatPartner: cacheUser;
}

const Messages: React.FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatId,
  chatPartner,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  useEffect(() => {
    console.log("subscribed to chat", chatId);
    const messageHandler = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    const channel = pusherClient
      .subscribe(toPusherKey(`chat:${chatId}`))
      .bind("incoming-message", messageHandler);

    return () => {
      // pusherClient.unsubscribe(toPusherKey(`chat:${chatId}`));
      channel.unbind();
    };
  }, []);
  const formatTimestamp = (timestamp: number) => {
    return format(timestamp, "h:mm a");
  };

  const scrollDownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="messages"
      className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex h-full flex-1 flex-col-reverse gap-4 overflow-y-auto p-3"
    >
      <div ref={scrollDownRef} />
      {messages &&
        messages.map((message, index) => {
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
