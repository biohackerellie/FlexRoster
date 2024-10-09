"use client";

import React from "react";
import { Link } from "next-view-transitions";

import type { messageAlerts } from "@local/utils/";
import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";

import { chatHrefConstructor } from "@/lib/utils";

interface ComponentProps {
  messages: messageAlerts[];
  userId: string;
}

export default function AlertComponent({ messages, userId }: ComponentProps) {
  if (!messages || messages.length === 0) {
    return (
      <div className="flex h-full max-h-[calc(100vh-6rem)] w-fit flex-1 flex-col content-center items-center justify-center align-middle">
        <div className="p-4 text-2xl font-bold text-gray-600">No alerts</div>
      </div>
    );
  } else {
    return (
      <div className="flex h-full max-h-[calc(100vh-6rem)] w-fit flex-1 flex-col content-center items-center justify-center align-middle">
        {messages.map((messageAlerts, index) => {
          return (
            <div key={index}>
              <MessageComponent messageAlerts={messageAlerts} userId={userId} />
            </div>
          );
        })}
      </div>
    );
  }
}
interface Props {
  messageAlerts: messageAlerts;
  userId: string;
}

function MessageComponent({ messageAlerts, userId }: Props) {
  return (
    <div className="inset-1 flex w-full justify-between gap-4 p-2">
      <span className="font-semibold">{messageAlerts.chatPartnerName}</span>
      <Button variant="outline" size="sm">
        <Link
          href={`/dashboard/chat/${chatHrefConstructor(messageAlerts.chatPartnerId, userId)}`}
        >
          Messages
        </Link>
      </Button>
    </div>
  );
}
