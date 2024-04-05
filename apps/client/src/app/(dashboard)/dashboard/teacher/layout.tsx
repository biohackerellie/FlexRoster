import { notFound } from "next/navigation";

import { auth } from "@local/auth";

import { Navbar } from "@/components/ui/navbar";

export default async function teacherLayout({
  children,
  portals,
}: {
  children: React.ReactNode;
  portals: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    notFound();
  }
  const userId = session.user.id;
  return (
    <div className="flex h-screen flex-col">
      <Navbar
        userId={userId}
        navItems={[
          {
            name: "Home",
            link: "/dashboard",
          },
          {
            name: "Requests",
            link: "/dashboard/teacher/requests",
          },
          {
            name: "Messages",
            link: "/dashboard/teacher/messages",
          },
        ]}
      />
      {children}
      {portals}
    </div>
  );
}
