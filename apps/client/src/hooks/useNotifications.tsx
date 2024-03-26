"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

import { Message } from "@local/validators";

import { pusherClient } from "@/lib/pusher";
import { chatHrefConstructor, toPusherKey } from "@/lib/utils";

interface ExtendedMessage extends Message {
  senderName: string;
}

function useChatNotifications(userId: string) {
  const router = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${userId}:chats`));

    const chatHandler = (message: ExtendedMessage) => {
      const shouldNotify =
        pathname !==
        `/dashboard/chat/${chatHrefConstructor(userId, message.senderId)}`;
      if (!shouldNotify) return;

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

export { useChatNotifications };
