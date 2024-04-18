import * as React from "react";
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
import { DataTable } from "@local/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@local/ui/tabs";

import { ModeToggle } from "@/components/darkmodeToggle";
import { client } from "@/lib/eden";
import { chatHrefConstructor } from "@/lib/utils";
import AlertComponent from "./_components/AlertComponent";
import { columns } from "./_components/columns";
import NewRequestsComponent from "./_components/Requests";

export default async function TeacherDashboardPage({
  params,
}: {
  params: { id: string };
}) {
  
  const teacherId = params.id;
  const { roster, messages } = await AllData(teacherId);

  return (
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
          <ModeToggle />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Roster</CardTitle>
          <CardDescription>
            This table will show your dailey Flex roster, and will adjust for
            approved transfers
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
    </Tabs>
  );
}

async function AllData(teacherId: string) {
  const [roster, messages] = await Promise.all([
    cachedData(teacherId),
    getMessages(teacherId),
  ]);
  return { roster, messages };
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
      studentId: student.studentId,
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
