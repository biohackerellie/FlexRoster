import { unstable_cache as cache } from "next/cache";

import { auth } from "@local/auth";
import { client } from "@local/eden";

import Requests from "../_components/Requests";

export default async function RequestsPage() {
  const session = await auth();
  const requests = await cachedData(session?.user?.id!);
  let incoming = null;
  let outgoing = null;
  if (!requests) {
    incoming = [];
    outgoing = [];
  }

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
    <div className="flex h-full max-h-[calc(100vh-6rem)] w-fit flex-1 flex-col content-center items-center justify-center align-middle">
      <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-4xl">
        Requests
      </h1>
      <Requests
        incomingRequests={incoming}
        outgoing={outgoing}
        userId={session?.user.id!}
      />
    </div>
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
