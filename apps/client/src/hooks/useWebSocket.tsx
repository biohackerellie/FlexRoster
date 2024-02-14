"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { client } from "@local/eden";
import { Message } from "@local/validators";

import { env } from "@/env.js";

interface SocketData {
  message: string;
}

export default function useWebSocket() {
  const router = useRouter();
  const chat = client.api.sockets.chat.subscribe();
  const ws = React.useRef<typeof chat>();

  const [messages, setMessages] = React.useState<SocketData[]>([]);

  React.useEffect(() => {
    chat.subscribe((message) => {
      const data: Message = JSON.parse(message.data);
      setMessages((prev) => [...(prev ?? []), data]);
    });
    return () => {
      chat.close();
    };
  }, [chat, email]);

  return {
    ws: ws.current,
    messages,
  };
}
