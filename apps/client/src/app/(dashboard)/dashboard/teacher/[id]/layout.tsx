import { notFound } from "next/navigation";

import { auth } from "@local/auth";

export default async function teacherLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const session = await auth();
  if (session?.user?.id !== params.id) {
    return notFound();
  }
  const firstName = session?.user?.name!.split(" ")[0] ?? "Teacher";
  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-screen w-full flex-col ">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold">
              Hello, {firstName}!
            </h1>
          </div>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
