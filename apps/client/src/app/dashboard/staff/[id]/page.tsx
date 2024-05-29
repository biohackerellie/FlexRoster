import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { Loader2 } from "lucide-react";

import type { TableSearchParams } from "@local/validators";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { searchParamsValidator } from "@local/validators";

import { client } from "@/lib/eden";
import { getDefaultRoster } from "../../_components/logic/queries";
// import { getDefaultRoster } from "../../_components/logic/queries";
import TeacherRosterTable from "../../_components/tables/teacherTable";

export default function TeacherDashboardPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParams;
}) {
  const teacherId = params.id;
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
            />
          </React.Suspense>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
