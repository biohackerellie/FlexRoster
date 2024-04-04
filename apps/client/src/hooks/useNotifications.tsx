"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

import { Message, Request } from "@local/validators";

import { pusherClient } from "@/lib/pusher";
import { chatHrefConstructor, toPusherKey } from "@/lib/utils";

interface ExtendedMessage extends Message {
  senderName: string;
}

function useChatNotifications(userId: string) {
  const router = useRouter();
  const pathname = usePathname();
  let count = 0;
  React.useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${userId}:chats`));

    const chatHandler = (message: ExtendedMessage) => {
      const shouldNotify =
        pathname !==
        `/dashboard/chat/${chatHrefConstructor(userId, message.senderId)}`;
      if (!shouldNotify) return;
      count++;
      toast(`New message from ${message.senderName}`, {
        action: {
          label: "View",
          onClick: () =>
            router.push(
              `/dashboard/chat/${chatHrefConstructor(userId, message.senderId)}`,
            ),
        },
        position: "top-center",
      });
    };
    pusherClient.bind("new-message", chatHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${userId}:chats`));
      pusherClient.unbind("new-message", chatHandler);
    };
  }, [pathname, userId, router]);
}
function useRequestNotifications(userId: string) {
  const router = useRouter();
  const pathname = usePathname();
  let count = 0;
  React.useEffect(() => {
    if (pathname === "/dashboard/teacher/requests") return;
    pusherClient.subscribe(toPusherKey(`request:${userId}`));
    const requestHandler = (request: Request) => {
      count++;
      toast(`New request from ${request.studentName}`, {
        position: "top-center",
      });
    };
    const outgoingHandler = (request: Request) => {
      count++;
      toast(`${request.studentName} has requested to transfer to a new room`, {
        position: "top-center",
      });
    };
    pusherClient.bind("new-request", requestHandler);
    pusherClient.bind("new-outgoing", outgoingHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`request:${userId}`));
      pusherClient.unbind("new-request", requestHandler);
      pusherClient.unbind("new-outgoing", outgoingHandler);
    };
  }, [userId, router, pathname]);
}

export { useChatNotifications, useRequestNotifications };
