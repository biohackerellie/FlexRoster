import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@local/auth";

import SidebarChatList from "@/components/chat/sidebarchatlist";
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
  const friends = await chatUsersByRole(session?.user?.id, role);
  const mappedFriends = Object.keys(friends!).map((friendKey) => {
    const key = friendKey as `user:${string}`;
    const id = friendKey.substring(5);
    const friend = friends![key];
    return {
      name: friend!.name,
      role: friend!.role,
      id: id,
      available: friend!.available,
      roomNumber: friend!.roomNumber,
      email: friend!.email,
    };
  });
  return (
    <div className="flex h-screen w-full">
      <div className="md:hidden">{children}</div>
      <div className="hidden h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 md:flex">
        <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
          <p className="justify-center text-center text-3xl font-bold">STEAM</p>
        </Link>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {sidebarOptions.map((option) => {
              return (
                <li key={option.id}>
                  <Link
                    href={option.href}
                    className="text-gray=700 group flex gap-3 rounded-md p-2 text-sm font-semibold leading-6 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600">
                      <option.icon className="h-4 w-5" />
                    </span>
                    <span>{option.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* {mappedFriends.length > 0 ? (
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Teachers
            </div>
          ) : null}
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <SidebarChatList
                friends={mappedFriends}
                sessionId={session?.user.id!}
                UserRole={session?.user.roles!}
              />
            </li>
          </ul> */}
        </nav>
      </div>
      <aside className="container max-h-screen w-full py-16 md:py-12">
        {children}
      </aside>
    </div>
  );
}
