import * as React from "react";
import { unstable_noStore as noStore } from "next/cache";
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

import { columns } from "@/components/students-columns";
import { client } from "@/lib/eden";

export default async function AllStudentsPage() {
  const roster = await getData();
  const mapped = new Map(roster.map((item) => [item.rosterId, item]));

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
            <DataTable columns={columns} data={roster} />
          </React.Suspense>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

async function getData() {
  noStore();
  const { data, error } = await client.api.rosters.all.get();

  if (error) {
    console.error(error);
    return [];
  }
  return data;
}
