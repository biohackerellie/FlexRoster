import Link from "next/link";

import { auth } from "@/lib/auth";

export const metadata = {
  title: "STEAM | Dashboard",
  description: "Your Dashboard",
};

export default async function DashboardLayout({
  student,
  teacher,
}: {
  student: React.ReactNode;
  teacher: React.ReactNode;
}) {
  const session = await auth();
  const role = session?.user?.roles;

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
          <img src="/next.svg" alt="STEAM" className="h-8 w-auto" />
        </Link>
      </div>
      {role === "teacher" ? teacher : student}
    </div>
  );
}
