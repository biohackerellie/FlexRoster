import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { client } from "@local/eden";

import Modal from "@/components/ui/modal";
import Requests from "../../_components/Requests";

export default async function RequestsPage() {
  const session = await auth();
  const requests = await cachedData(session?.user?.id!);
  let incoming = null;
  let outgoing = null;
  if (requests) {
    if (requests.incomingRequests && requests.incomingRequests.length > 0) {
      incoming = requests.incomingRequests.filter((request) => {
        return request.status === "pending";
      });
    }
    if (requests.outgoingRequests && requests.outgoingRequests.length > 0) {
      outgoing = requests.outgoingRequests;
    }
  }

  return (
    <Modal>
      <Suspense fallback={<Loader2 className="h-2 h-2 animate-spin" />}>
        <Requests
          incomingRequests={incoming}
          outgoing={outgoing}
          userId={session?.user.id!}
        />
      </Suspense>
    </Modal>
  );
}

const cachedData = cache(
  async (teacherId: string) => getRequests(teacherId),
  ["requests"],
  {
    revalidate: 60,
    tags: ["requests"],
  },
);

async function getRequests(teacherId: string) {
  const { data, error } = await client.api.requests
    .user({ userId: teacherId })
    .get();
  if (error) {
    console.error(error);
  }

  return data;
}
