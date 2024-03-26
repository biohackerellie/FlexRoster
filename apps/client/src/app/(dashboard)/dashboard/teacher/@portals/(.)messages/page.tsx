import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { AlertComponent } from "../../_components/AlertComponent";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { client } from "@local/eden";


import Modal from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


export default async function MessagesPage() {
  const session = await auth();
  const userId = session?.user?.id!;
  if (!userId) {
    throw new Error("No user found");
  }
  const messages = await cachedData(userId);
  return (
    <Modal>
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
    </Modal>
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
