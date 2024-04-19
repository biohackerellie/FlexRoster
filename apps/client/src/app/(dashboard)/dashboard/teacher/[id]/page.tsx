import * as React from "react";
import { unstable_cache as cache } from "next/cache";
import { Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { DataTable } from "@local/ui/data-table";

import { client } from "@/lib/eden";
import { chatHrefConstructor } from "@/lib/utils";
import { columns } from "./_components/columns";

export default async function TeacherDashboardPage({
  params,
}: {
  params: { id: string };
}) {
  const teacherId = params.id;
  const roster = await cachedData(teacherId);

  return (
    <div>
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
    </div>
  );
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
