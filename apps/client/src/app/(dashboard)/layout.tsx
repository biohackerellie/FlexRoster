import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@local/auth";

import { sidebarOptions } from "@/lib/constants";
import { chatUsersByRole } from "@/lib/utils";

export default async function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

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
    <div className="flex h-screen w-full">
      <div className="container max-h-screen w-full py-16 md:py-12">
        {children}
      </div>
    </div>
  );
}
