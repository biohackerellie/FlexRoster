import * as React from "react";
import { unstable_cache as cache } from "next/cache";
import { File, ListFilter, Loader2, PlusCircle, Search } from "lucide-react";

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
import { DataTable } from "@local/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@local/ui/tabs";

import { client } from "@/lib/eden";
import { chatHrefConstructor } from "@/lib/utils";
import AlertComponent from "./_components/AlertComponent";
import { columns } from "./_components/columns";
import NewRequestsComponent from "./_components/Requests";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0] ?? "Teacher";
  const teacherId = session?.user?.id!;

  const { roster, messages, requests } = await AllData(teacherId);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold">
            Hello, {firstName}!
          </h1>
        </div>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="roster">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="roster">Roster</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" className="h-8 gap-1">
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Reset Roster
                      </span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Reset Roster</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                      This will reset your roster to your class default. <br />{" "}
                      <strong>This action cannot be undone</strong>.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Reset</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <TabsContent value="roster">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Roster</CardTitle>
                  <CardDescription>
                    This table will show your dailey Flex roster, and will
                    adjust for approved transfers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <React.Suspense
                    fallback={<Loader2 className="h-8 w-8 animate-spin" />}
                  >
                    <DataTable columns={columns} data={roster} />
                  </React.Suspense>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>New Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <React.Suspense
                    fallback={<Loader2 className="h-8 w-8 animate-spin" />}
                  >
                    <AlertComponent messages={messages} userId={teacherId} />
                  </React.Suspense>
                </CardContent>
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
                  >
                    <NewRequestsComponent
                      requests={requests}
                      userId={teacherId}
                    />
                  </React.Suspense>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

async function AllData(teacherId: string) {
  const [roster, messages, requests] = await Promise.all([
    cachedData(teacherId),
    getMessages(teacherId),
    cachedRequests(teacherId),
  ]);
  return { roster, messages, requests };
}

async function getDefaultRoster(teacherId: string) {
  const { data, error } = await client.api.rosters.teacher
    .roster({ userId: teacherId })
    .get();

  if (error) {
    console.error(error);
  }
  if (!data) {
    return [];
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

async function getMessages(teacherId: string) {
  const { data, error } = await client.api.inbox
    .alerts({ userId: teacherId })
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

const cachedRequests = cache(
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
