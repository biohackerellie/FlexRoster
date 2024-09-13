import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { Card, CardContent } from "@local/ui/card";
import { searchParamsValidator } from "@local/utils";

import { env } from "@/env";
import {
  getStudentClassesData,
  getStudentRequests,
} from "../_components/logic/queries";
import { StudentRequestsComponent } from "../_components/Students-Requests";
import StudentClassesTable from "../_components/tables/studentClassesTable";

export default async function StudentDashboard({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const session = await auth();
  if (!session) {
    return notFound();
  }
  const userId = session?.user?.id;
  const search = searchParamsValidator.parse(searchParams);
  return (
    <div className="flex justify-center align-middle">
      <Card className="fixed top-1/4 border-none bg-transparent sm:relative sm:top-0 sm:w-full sm:border sm:bg-inherit">
        <CardContent className="xl:gap-y-4">
          <div className="">
            <React.Suspense
              fallback={<Loader2 className="h-4 w-4 animate-spin" />}
            >
              <StudentRequestsComponent
                dataPromise={getStudentRequests(userId)}
              />
            </React.Suspense>
          </div>
          <div>
            <React.Suspense
              fallback={<Loader2 className="h-4 w-4 animate-spin" />}
            >
              <StudentClassesTable
                dataPromise={getStudentClassesData(userId, search)}
              />
            </React.Suspense>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
