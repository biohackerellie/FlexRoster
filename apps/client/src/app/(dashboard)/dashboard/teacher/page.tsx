import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";

import { auth } from "@local/auth";
import { client } from "@local/eden";

import { Skeleton } from "@/components/ui/skeleton";
import { chatHrefConstructor } from "@/lib/utils";
import { DefaultRosterComponent } from "./_components";
import Requests from "./_components/Requests";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];
  const teacherId = session?.user?.id!;

  const roster = await cachedData(teacherId);

  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-evenly">
      <h1 className="relative z-10 block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-4xl">
        Hello, {firstName}!
      </h1>
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
      transferred: student.transferred,
      arrived: student.arrived,
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

const cachedData = cache(
  async (teacherId: string) => getDefaultRoster(teacherId),
  ["roster"],
  {
    revalidate: 60,
    tags: ["roster"],
  },
);

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
