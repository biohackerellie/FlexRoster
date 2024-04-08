import { Suspense } from "react";
import { unstable_cache as cache } from "next/cache";
import { Loader2 } from "lucide-react";

import { client } from "@local/eden";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@local/ui/breadcrumb";

import { DataTable } from "@/components/tables";
import { studentColumns } from "../_components/rosterTable";

interface PageProps {
  params: {
    rosterId: string;
  };
}

export default async function SecRosterPage({ params }: PageProps) {
  const data = await getCachedData(params.rosterId);
  const teacherName = data[0]?.teacherName;

  return (
    <div className=" flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-evenly">
      {PageBreadCrump(teacherName!)}
      <h1 className="relative z-10 block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-4xl">
        {teacherName} Roster
      </h1>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center text-xl">
          <span className="mr-3 font-semibold text-neutral-200">Students</span>
        </div>
        <Suspense fallback={<Loader2 className="h-2 w-2 animate-spin" />}>
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
  }
  if (!data) {
    return [];
  }
  return data;
}

const getCachedData = cache(async (id: string) => getData(id), ["roster"], {
  revalidate: 60,
  tags: ["roster"],
});

const PageBreadCrump = (teacherName: string) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>{teacherName}-Roster</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
