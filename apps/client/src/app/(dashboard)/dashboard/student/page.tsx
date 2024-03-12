import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";

import { auth } from "@local/auth";
import { fetch } from "@local/eden";

import { Skeleton } from "@/components/ui/skeleton";
import { greetings } from "@/lib/constants";
import { StudentTable } from "@/lib/types";
import { chatHrefConstructor, formatTeacherNames } from "@/lib/utils";
import { ClassListComponent } from "./_components/ClassList";

async function getData(email: string, userId: string) {
  const { data, error } = await fetch("/api/classes/", {});
  if (error) {
    return [];
  }
  const mappedData = data.map((rooms) => {
    const formattedTeacherName = formatTeacherNames(
      rooms.classrooms.teacherName,
    );
    return {
      roomNumber: rooms.classrooms.roomNumber,
      teacherName: formattedTeacherName,
      available: rooms.classrooms.available,
      teacherId: rooms.classrooms.teacherId ?? "",
      chatId: `/dashboard/chat/${chatHrefConstructor(userId, rooms.classrooms.teacherId!)}`,
    };
  });

  return mappedData as StudentTable[];
}

const cachedData = cache(
  async (email: string, userId: string) => getData(email, userId),
  ["class-list"],
  {
    revalidate: 60,
    tags: ["class-list"],
  },
);

async function getClass(userId: string) {
  const { data, error } = await fetch("/api/rosters/student/:userId", {
    params: {
      userId,
    },
  });
  if (error) {
    throw new Error(error.message, { cause: error.cause });
  }
  if (!data) return "No class found";
  return data;
}

async function allData(email: string, userId: string) {
  const [availableClasses, currentClass] = await Promise.all([
    cachedData(email, userId),
    getClass(userId),
  ]);
  return { availableClasses, currentClass };
}

export default async function StudentDashboard() {
  const session = await auth();

  const firstName = session?.user?.name!.split(" ")[0];
  const userId = session?.user?.id!;
  const email = session?.user?.email!;

  const { availableClasses, currentClass } = await allData(email, userId);

  if (!currentClass) return <div>loading...</div>;

  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const greeting = getRandomGreeting();
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="pb-2 text-center text-4xl font-semibold">
        {greeting} {firstName}!
      </h1>
      <p className="pb-2 text-center text-2xl font-medium">{currentClass}</p>
      <div className="max-h-2xl container flex max-w-4xl flex-col justify-center p-4">
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <ClassListComponent data={availableClasses} />
        </Suspense>
      </div>
    </div>
  );
}
