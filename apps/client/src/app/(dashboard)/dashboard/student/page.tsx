import type { StudentTable } from "@/lib/types";
import React, { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@local/ui/alert-dialog";
import { Button } from "@local/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@local/ui/tabs";

import { ModeToggle } from "@/components/darkmodeToggle";
import { greetings } from "@/lib/constants";
import { client } from "@/lib/eden";
import { chatHrefConstructor, formatTeacherNames } from "@/lib/utils";
import { ClassListComponent } from "./_components/ClassList";

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
    <div className="flex min-h-screen w-full flex-col ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold">
            {greeting} {firstName}!
          </h1>
        </div>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="flex">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="flex">Flex</TabsTrigger>

                <TabsTrigger value="requests">Requests</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <ModeToggle />
              </div>
            </div>
            <TabsContent value="flex">
              <Card>
                <CardHeader>
                  <CardTitle>{currentClass}</CardTitle>
                </CardHeader>
                <CardContent>
                  <React.Suspense
                    fallback={<Loader2 className="h-8 w-8 animate-spin" />}
                  >
                    <ClassListComponent data={availableClasses} />
                  </React.Suspense>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <CardTitle>Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <React.Suspense
                    fallback={<Loader2 className="h-8 w-8 animate-spin" />}
                  ></React.Suspense>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

async function allData(email: string, userId: string) {
  const [availableClasses, currentClass] = await Promise.all([
    cachedData(email, userId),
    getClass(userId),
  ]);
  return { availableClasses, currentClass };
}

async function getData(email: string, userId: string) {
  const { data, error } = await client.api.classes.all.get();

  if (error) {
    return [];
  }

  const mappedData = data.map((rooms) => {
    const formattedTeacherName = formatTeacherNames(
      rooms.classrooms.teacherName,
    );
    const teacherId = rooms.classrooms.teacherId ?? "";
    return {
      roomNumber: rooms.classrooms.roomNumber,
      teacherName: formattedTeacherName,
      available: rooms.classrooms.available,
      teacherId: teacherId,
      chatId: `/dashboard/chat/${chatHrefConstructor(userId, teacherId)}`,
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
  const { data, error } = await client.api.rosters.student
    .id({ userId: userId })
    .get();
  console.log(data);
  if (error) {
    console.error(error);
  }
  if (!data) return [];
  return data;
}
