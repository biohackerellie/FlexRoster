import type { SearchParams } from "@/hooks/types";
import type { Metadata } from "next";
import * as React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Loader2 } from "lucide-react";

import type { TableSearchParams } from "@local/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { searchParamsValidator } from "@local/utils";

import { getTableData } from "../../_components/logic/queries";
import AllStudentsTable from "../../_components/tables/studentTable";

export const metadata: Metadata = {
  title: "FLEX | All Students",
};

export default function AllStudentsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const search = searchParamsValidator.parse(searchParams);
  const roster = getTableData(search);
  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-screen w-full flex-col ">
        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
          </CardHeader>
          <CardContent>
            <React.Suspense
              fallback={<Loader2 className="h-8 w-8 animate-spin" />}
            >
              <AllStudentsTable dataPromise={roster} />
            </React.Suspense>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
