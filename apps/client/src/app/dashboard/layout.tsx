import { notFound } from "next/navigation";

import { auth } from "@local/auth";


import { Shell } from "@local/ui/shell";

import { Navbar } from "@/components/navbar";
import { greetings } from "@/lib/constants";

export default async function staffDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return notFound();
  }
  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };
  const role = session?.user?.roles;
  const greeting = role === "student" ? getRandomGreeting() : "Hello, ";
  const userId = session?.user?.id;
  const firstName = session?.user?.name!.split(" ")[0] ?? "";

  return (
    <div className="flex min-h-screen w-full flex-col   ">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <Navbar userId={userId} role={role} />
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Shell>{children}</Shell>
      </div>
    </div>
  );
}
