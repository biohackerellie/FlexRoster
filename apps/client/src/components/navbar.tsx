"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@local/ui";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";

import { useChatNotifications } from "@/hooks";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  userId?: string;
  role?: string;
}

export function Navbar({ className, userId, role, ...props }: NavProps) {
  const teacherLinks = [
    { name: "Rosters", href: "/dashboard/staff" },
    { name: "My Roster", href: `/dashboard/staff/${userId}` },
    { name: "All Students", href: `/dashboard/staff/students` },
    { name: "Requests", href: `/dashboard/staff/${userId}/requests` },
    { name: "Messages", href: `/dashboard/staff/${userId}/messages` },
  ];

  const secLinks = [
    { name: "Rosters", href: "/dashboard/staff" },
    { name: "All Students", href: "/dashboard/staff/students" },
  ];

  const studentLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Requests", href: "/dashboard/student/requests" },
  ];

  const pathname = usePathname();
  let links = [];

  switch (role) {
    case "teacher":
      links = teacherLinks;
      break;
    case "secretary":
      links = secLinks;
      break;
    case "admin":
      links = studentLinks;
      break;
    default:
      links = studentLinks;
      break;
  }

  if (userId) {
    useChatNotifications(userId!);
  }
  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div
          className={cn(
            " inline-flex h-10 items-center justify-center rounded-md bg-muted  p-1",
            className,
          )}
          {...props}
        >
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "inline-flex h-7 items-center justify-center whitespace-nowrap  rounded-sm px-3 py-1.5  text-sm font-medium ring-offset-background transition-all ease-in-out hover:text-primary",
                pathname === link.href || (index === 0 && pathname === "/")
                  ? "bg-background font-medium text-foreground shadow-sm outline-none ring-2 ring-ring ring-offset-2 "
                  : "text-muted-foreground ",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
