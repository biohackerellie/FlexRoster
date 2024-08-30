import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { searchParamsValidator } from "@local/utils";

import { env } from "@/env";
import { getDefaultRoster } from "../../_components/logic/queries";
import TeacherRosterTable from "../../_components/tables/teacherTable";

export default async function TeacherDashboardPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParams;
}) {
  "use memo";
  const session = await auth();
  const teacherId = params.id;
  let isTeacher = false;
  if (session) {
    const userId = session?.user?.id;
    if (userId === teacherId) {
      isTeacher = true;
    }
  } else if (env.NEXT_PUBLIC_DEMO) {
    console.log("Demo mode");

    isTeacher = true;
  }

  const search = searchParamsValidator.parse(searchParams);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Today's Roster</CardTitle>
          <CardDescription>
            This table will show the daily Flex roster, and will adjust for
            approved transfers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <React.Suspense
            fallback={<Loader2 className="h-8 w-8 animate-spin" />}
          >
            <TeacherRosterTable
              dataPromise={getDefaultRoster(teacherId, search)}
              authorized={isTeacher}
            />
          </React.Suspense>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
