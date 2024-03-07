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
  return (
    <div className="flex h-screen w-full">
      <div className="container max-h-screen w-full py-16 md:py-12">
        {children}
      </div>
    </div>
  );
}
