import Link from "next/link";

import SidebarChatList from "@/components/studentSideBar";
import { auth } from "@/lib/auth";
import { chatUsersByRole } from "@/lib/utils";

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

  const friends = await chatUsersByRole(session?.user?.id, role);
  const mappedFriends = Object.keys(friends!).map((friendKey) => {
    const key = friendKey as `user:${string}`;
    const id = friendKey.substring(5);
    const friend = friends![key];
    return {
      name: friend!.name,
      role: friend!.role,
      id: id,
    };
  });

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
          <img src="/next.svg" alt="STEAM" className="h-8 w-auto" />
        </Link>
      </div>
      {mappedFriends.length > 0 ? (
        <div className="text-xs font-semibold leading-6 text-gray-400">
          Your Chats
        </div>
      ) : null}
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <SidebarChatList
              friends={mappedFriends}
              sessionId={session?.user.id!}
            />
          </li>
        </ul>
      </nav>
      <aside className="container max-h-screen w-full py-16 md:py-12">
        {role === "teacher" ? teacher : student}
      </aside>
    </div>
  );
}
