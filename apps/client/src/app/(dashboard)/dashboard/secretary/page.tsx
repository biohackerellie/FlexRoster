import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { DataTable } from "@local/ui/data-table";

import { columns } from "./_components/rosterTable";

export default async function SecretaryPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];

  const data = await getCachedData();

  return (
    <div className=" flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-center">
      <h1 className="relative z-10 block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-4xl">
        Hello {firstName}!
      </h1>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center text-xl">
          <span className="mr-3 font-semibold text-neutral-200">Rosters</span>
        </div>

        <Suspense fallback={<Loader2 className="h-2 w-2 animate-spin" />}>
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
  }
  if (!data) {
    return [];
  }
  return data;
}

const getCachedData = cache(async () => getData(), ["roster"], {
  revalidate: 60,
  tags: ["roster"],
});
