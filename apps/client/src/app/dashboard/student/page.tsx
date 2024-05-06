import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { searchParamsValidator } from "@local/validators";

import { getStudentClassesData } from "../_components/logic/queries";
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
      <Card>
        <CardHeader>
          <CardTitle>Available Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <React.Suspense
            fallback={<Loader2 className="h-4 w-4 animate-spin" />}
          >
            <StudentClassesTable
              dataPromise={getStudentClassesData(userId, search)}
            />
          </React.Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
