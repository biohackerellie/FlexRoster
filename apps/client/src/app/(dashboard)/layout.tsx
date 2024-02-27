import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@local/auth";

import SidebarChatList from "@/components/studentSideBar";
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
        {children}
      </aside>
    </div>
  );
}
