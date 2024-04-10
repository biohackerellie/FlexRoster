import { Suspense } from "react";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import type { messageAlerts } from "@local/validators";
import { auth } from "@local/auth";
import { ScrollArea } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

import { client } from "@/lib/eden";
import { AlertComponent } from "../_components/AlertComponent";

/**
 * This page is for viewing recent message alerts, and is opened as a portal.
 *
 */

export default async function MessagesPage() {
  const session = await auth();
  const userId = session?.user?.id!;
  if (!userId) {
    notFound();
  }
  const messages = await getMessages(userId);
  return (
    <div className="inset-0 h-auto w-full items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-500">Messages</h1>
      <div className="flex h-48 w-auto items-center justify-center">
        <ScrollArea>
          <Suspense fallback={<Loader2 className="h-4 w-4 animate-spin" />}>
            {messages.map((messageAlerts, index) => {
              return (
                <div key={index}>
                  <AlertComponent
                    messageAlerts={messageAlerts}
                    userId={userId}
                  />
                  <Separator />
                </div>
              );
            })}
          </Suspense>
        </ScrollArea>
      </div>
    </div>
  );
}

async function getMessages(userId: string) {
  const { data, error } = await client.api.inbox
    .alerts({ userId: userId })
    .get();
  if (error) {
    console.error(error);
    return [];
  }
  if (!data) {
    return [];
  }
  return data;
}

const cachedData = cache(
  async (userId: string) => getMessages(userId),
  ["messages"],
  {
    revalidate: 60,
    tags: ["messages"],
  },
);
