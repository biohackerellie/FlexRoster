import type { SearchParams } from "@/hooks/types";
import * as React from "react";
import { unstable_noStore as noStore } from "next/cache";
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
import AllStudentsTable from "../_components/studentTable";

export default async function AllStudentsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const search = searchParamsValidator.parse(searchParams);
  const roster = getTableData(search);
  return (
    <div>
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
  );
}

export async function getTableData(search: TableSearchParams) {
  noStore();
  const { data, error } = await client.api.rosters.all.get();

  if (error) {
    console.error(error);
    return [];
  }
  if (!search) {
    return data;
  }
  let result = data;

  if (search.studentName) {
    const searchLower = search.studentName.toLowerCase();
    result = result.filter((student) =>
      student.studentName.toLowerCase().includes(searchLower),
    );
  }

  if (search.status) {
    const statusArray = search.status.split(".");
    result = result.filter((student) => statusArray.includes(student.status));
  }
  return result;
}
