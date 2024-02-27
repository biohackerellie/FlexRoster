"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastT } from "sonner";

import { client } from "@local/eden";
import { Message } from "@local/validators";

import { chatHrefConstructor } from "@/lib/utils";

type cacheUser = {
  name: string;
  role: string;
  id: string;
};

interface SidebarChatListProps {
  friends: cacheUser[];
  sessionId: string;
}

interface ExtendedMessage extends Message {
  senderName: string;
}

const SidebarChatList: React.FC<SidebarChatListProps> = ({
  friends,
  sessionId,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [unseenMessages, setUnseenMessages] = React.useState<Message[]>([]);
  const [activeChats, setActiveChats] = React.useState<cacheUser[]>(friends);

  React.useEffect(() => {
    const chat = client.api.users[`${sessionId}`]?.subscribe();
    const chatHandler = (message: ExtendedMessage) => {
      const shouldNotify =
        pathname !==
        `/chat/${chatHrefConstructor(sessionId, message.senderId)}`;

      if (!shouldNotify) return;
      toast(`new message from ${message.senderName}`, {
        action: {
          label: "Open",
          onClick: () => {
            router.push(
              `/chat/${chatHrefConstructor(sessionId, message.senderId)}`,
            );
            toast.dismiss();
          },
        },
        cancel: {
          label: "Dismiss",
          onClick: () => {
            toast.dismiss();
          },
        },
      });

      setUnseenMessages((prev) => [...prev, message]);
    };
    chat?.subscribe((message) => chatHandler(message.data as ExtendedMessage));

    return () => {
      chat?.close();
    };
  }, [pathname, sessionId, router]);

  React.useEffect(() => {
    if (pathname?.includes("chat")) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId));
      });
    }
  }, [pathname]);

  return (
    <ul role="list" className="-mx-2 max-h-[25rem] space-y-1 overflow-y-auto">
      {activeChats.sort().map((friend) => {
        const unseenMessagesCount = unseenMessages.filter((unseenMsg) => {
          return unseenMsg.senderId === friend.id;
        }).length;
        return (
          <li key={friend.id}>
            <a
              href={`/chat/${chatHrefConstructor(sessionId, friend.id)}`}
              className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              {friend.name}
              {unseenMessagesCount > 0 ? (
                <div className="rounded-fulls flex h-4 w-4 items-center justify-center bg-indigo-600 text-xs font-medium text-white">
                  {unseenMessagesCount}
                </div>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarChatList;
