"use client";

import * as React from "react";

import { client } from "@local/eden";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

interface ChatInputProps {
  to: string;
  from: string;
  message: string;
}

export default function testChat({ to, from, message }: ChatInputProps) {
  const chat = client.api.sockets.chat.subscribe();
  let messages = [];
  function sendMessage() {
    const payload = {
      to: to,
      from: from,
      content: message,
    };
    chat.send(JSON.stringify(payload));
    messages.push(JSON.stringify(payload));
  }
}
