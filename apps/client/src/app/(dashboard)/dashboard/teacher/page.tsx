import { Suspense } from "react";
import { unstable_cache } from "next/cache";

import { auth } from "@local/auth";
import { client, fetch } from "@local/eden";

import { Skeleton } from "@/components/ui/skeleton";
import { chatHrefConstructor } from "@/lib/utils";
import { DefaultRosterComponent } from "./_components";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];
  const teacherId = session?.user?.id!;

  const roster = await cachedRoster(teacherId);
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="text-3xl font-semibold text-gray-700">
        Hello, {firstName}!
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <DefaultRosterComponent data={roster} userId={teacherId} />
      </Suspense>
    </div>
  );
}

const cachedRoster = unstable_cache(
  async (teacherId: string) => getDefaultRoster(teacherId),
  ["default-roster"],
  {
    tags: ["roster"],
    revalidate: 60,
  },
);

async function getDefaultRoster(teacherId: string) {
  const { data, error } = await fetch("/api/rosters/teacher/roster/:userId", {
    params: {
      userId: teacherId,
    },
  });

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch roster");
  }
  if (!data) {
    throw new Error("No data found");
  }

  const mapped = data.map((student) => {
    return {
      attendance: student.attendance,
      studentName: student.studentName,
      studentEmail: student.studentEmail,
      studentId: student.studentId,
      chatId: student.studentId
        ? `/dashboard/chat/${chatHrefConstructor(teacherId, student.studentId)}`
        : null,
    };
  });
  return mapped;
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
