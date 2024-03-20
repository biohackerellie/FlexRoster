import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";

import { client } from "@local/eden";

import { DataTable } from "@/components/tables";
import { studentColumns } from "../_components/rosterTable";

interface PageProps {
  params: {
    rosterId: string;
  };
}

export default async function SecRosterPage({ params }: PageProps) {
  const data = await getCachedData(params.rosterId);
  return (
    <div className=" flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="pb-2 text-center text-4xl font-semibold">Students</h1>
      <p className="pb-2 text-center text-2xl font-medium">Rosters</p>

      <div className="max-h-2xl container flex max-w-4xl flex-col justify-center p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <DataTable columns={studentColumns} data={data} />
        </Suspense>
      </div>
    </div>
  );
}

async function getData(id: string) {
  const { data, error } = await client.api.rosters.teacher
    .roster({ userId: id })
    .get();
  if (error) {
    console.error(error);
    throw new Error("Failed to fetch classes");
  }
  if (!data) {
    throw new Error("No data found");
  }
  return data;
}

const getCachedData = cache(async (id: string) => getData(id), ["roster"], {
  revalidate: 60,
  tags: ["roster"],
});
