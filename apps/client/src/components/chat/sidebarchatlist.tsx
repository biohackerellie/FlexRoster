"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

import { Message } from "@local/validators";

import { pusherClient } from "@/lib/pusher";
import { chatHrefConstructor, toPusherKey } from "@/lib/utils";

type cacheTeacher = {
  id: string;
  name: string;
  role: string;
  available: boolean;
  roomNumber: string;
  email: string;
};

type cacheStudent = {
  id: string;
  name: string;
  role: string;
  assignedClass: string;
  transferredTo: string | null;
  email: string;
};

interface SidebarChatListProps {
  friends: cacheTeacher[];
  sessionId: string;
  UserRole: string;
}

interface ExtendedMessage extends Message {
  senderName: string;
}

const SidebarChatList: FC<SidebarChatListProps> = ({
  friends,
  sessionId,
  UserRole,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [unseenMessages, setUnseenMessages] = useState<Message[]>([]);
  const [requests, setRequests] = useState<cacheTeacher[]>(friends);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:chats`));
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:requests`));

    const newRequestHandler = (newRequest: cacheTeacher) => {
      console.log("a new request has been made", newRequest);
      setRequests((prev) => [...prev, newRequest]);
    };

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
    pusherClient.bind("new_message", chatHandler);
    pusherClient.bind("new_request", newRequestHandler);
    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:chats`));
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:requests`));

      pusherClient.unbind("new_message", chatHandler);
      pusherClient.unbind("new_request", newRequestHandler);
    };
  }, [pathname, sessionId, router]);

  useEffect(() => {
    if (pathname?.includes("chat")) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId));
      });
    }
  }, [pathname]);

  return (
    <ul role="list" className="max-h-[50rem] space-y-1 overflow-y-auto">
      {requests.sort().map((friend) => {
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
              {friend.available ? (
                <span className="rounded-full bg-green-500 px-2 py-1 font-bold text-white">
                  Available
                </span>
              ) : (
                <span className="rounded-full bg-red-500 px-2 py-1 font-bold text-white">
                  Unavailable
                </span>
              )}
              {unseenMessagesCount > 0 ? (
                <span className="rounded-full bg-indigo-600 px-2 py-1 font-bold text-white">
                  {unseenMessagesCount}
                </span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarChatList;
