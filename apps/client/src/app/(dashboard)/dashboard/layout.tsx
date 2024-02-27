import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@local/auth";

export const metadata = {
  title: "STEAM | Dashboard",
  description: "Your Dashboard",
};

export default async function DashboardLayout({
  student,
  teacher,
  children,
}: {
  student: React.ReactNode;
  teacher: React.ReactNode;
  children: React.ReactNode;
}) {
  const session = await auth();

  const sessionRole = session?.user?.roles;

  /**
   * @todo This is a temporary dev implementation to allow me to easily swap my user role
   * will be removed in the future
   */
  let role = sessionRole;
  if (sessionRole === "admin") {
    role = "student";
  }

  return (
    <>
      {children}
      {role === "teacher" ? teacher : student}
    </>
  );
}
