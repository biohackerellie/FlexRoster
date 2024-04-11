import { notFound } from "next/navigation";

import { auth } from "@local/auth";

import { Navbar } from "@/components/navbar";

export default async function teacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    notFound();
  }
  const userId = session.user.id;
  return <div className="flex h-screen flex-col">{children}</div>;
}
