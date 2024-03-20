import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";

import { auth } from "@local/auth";
import { client } from "@local/eden";

import { DataTable } from "@/components/tables";
import { columns } from "./_components/rosterTable";

export default async function SecretaryPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];

  const data = await getCachedData();

  return (
    <div className=" flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="pb-2 text-center text-4xl font-semibold">
        Hello {firstName}!
      </h1>
      <p className="pb-2 text-center text-2xl font-medium">Rosters</p>

      <div className="max-h-2xl container flex max-w-4xl flex-col justify-center p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <DataTable columns={columns} data={data} />
        </Suspense>
      </div>
    </div>
  );
}

async function getData() {
  const { data, error } = await client.api.classes.secretary.get();
  if (error) {
    console.error(error);
    throw new Error("Failed to fetch classes");
  }
  if (!data) {
    throw new Error("No data found");
  }
  return data;
}

const getCachedData = cache(async () => getData(), ["roster"], {
  revalidate: 60,
  tags: ["roster"],
});
