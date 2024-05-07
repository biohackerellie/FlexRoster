import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { Button } from "@local/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { searchParamsValidator } from "@local/validators";

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
    <div>
      <Card className="border-none bg-transparent sm:border sm:bg-inherit">
        <CardHeader>
          <CardTitle className="hidden sm:inline-block">
            Available Classes
          </CardTitle>
        </CardHeader>
        <CardContent className="grid justify-center align-middle sm:inline-block sm:justify-normal">
          <React.Suspense
            fallback={<Loader2 className="h-4 w-4 animate-spin" />}
          >
            <StudentClassesTable
              dataPromise={getStudentClassesData(userId, search)}
            />
          </React.Suspense>
          <div className="mt-4 sm:hidden">
            <React.Suspense
              fallback={<Loader2 className="h-4 w-4 animate-spin" />}
            >
              <StudentRequestsComponent
                dataPromise={getStudentRequests(userId)}
              />
            </React.Suspense>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
