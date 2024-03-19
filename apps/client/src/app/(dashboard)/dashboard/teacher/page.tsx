import { Suspense } from "react";
import { unstable_cache } from "next/cache";

import { auth } from "@local/auth";
import { client, fetch } from "@local/eden";

import { Skeleton } from "@/components/ui/skeleton";
import { chatHrefConstructor } from "@/lib/utils";
import { DefaultRosterComponent } from "./_components";
import Requests from "./_components/Requests";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];
  const teacherId = session?.user?.id!;

  const { roster, requests } = await getAllData(teacherId);
  const incoming = requests.incomingRequests.filter((request) => {
    return request.status === "pending";
  });

  const outgoing = requests.outgoingRequests;
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="text-3xl font-semibold text-gray-700">
        Hello, {firstName}!
      </h1>
      <Requests
        incomingRequests={incoming}
        outgoing={outgoing}
        userId={teacherId}
      />
      <Suspense fallback={<TableSkeleton />}>
        <DefaultRosterComponent data={roster} userId={teacherId} />
      </Suspense>
    </div>
  );
}

async function getDefaultRoster(teacherId: string) {
  const { data, error } = await client.api.rosters.teacher
    .roster({ userId: teacherId })
    .get();

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch roster");
  }
  if (!data) {
    throw new Error("No data found");
  }

  const mapped = data.map((student) => {
    return {
      attendance: `${student.attendance}--${student.rosterId}`,
      studentName: student.studentName,
      studentEmail: student.studentEmail,
      studentId: student.rosterId,
      chatId: student.studentId
        ? `/dashboard/chat/${chatHrefConstructor(teacherId, student.studentId)}`
        : null,
    };
  });

  return mapped;
}

async function getRequests(teacherId: string) {
  const { data, error } = await client.api.rosters.request
    .user({ userId: teacherId })
    .get();
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("Failed to fetch requests");
  }
  if (!data) {
    throw new Error("No data found");
  }

  return data;
}

async function getAllData(teacherId: string) {
  const [roster, requests] = await Promise.all([
    getDefaultRoster(teacherId),
    getRequests(teacherId),
  ]);

  return { roster, requests };
}

function TableSkeleton() {
  return (
    <div className="flex flex-col leading-tight">
      <div className="flex items-center text-xl">
        <span className="mr-3 font-semibold text-gray-700">Default Roster</span>
      </div>
      <Skeleton className="h-full w-full" />
    </div>
  );
}
