"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { set } from "date-fns";
import {
  Home,
  LineChart,
  MessageCircle,
  MoonIcon as Moon,
  Search,
  SunIcon as Sun,
  Users2,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@local/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { useChatNotifications } from "@/hooks";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  userId?: string;
  role?: string;
}

interface Links {
  name: string;
  href: string | any;
  icon?: React.ReactNode | any;
}

export function Navbar({ className, userId, role, ...props }: NavProps) {
  const teacherLinks = [
    {
      name: "My Roster",
      href: `/dashboard/staff/${userId}`,
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Rosters",
      href: "/dashboard/staff",
      icon: <Users2 className="h-5 w-5" />,
    },
    {
      name: "All Students",
      href: `/dashboard/staff/students`,
      icon: <Search className="h-5 w-5" />,
    },
    {
      name: "Requests",
      href: `/dashboard/staff/${userId}/requests`,
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      name: "Messages",
      href: `/dashboard/staff/${userId}/messages`,
      icon: <MessageCircle className="h-5 w-5" />,
    },
  ];

  const secLinks = [
    {
      name: "Rosters",
      href: "/dashboard/staff",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "All Students",
      href: "/dashboard/staff/students",
      icon: <Users2 className="h-5 w-5" />,
    },
  ];

  const studentLinks = [
    {
      name: "Home",
      href: `/dashboard/student`,
      icon: <Home className="h-5 w-5" />,
    },
  ];

  let links: Links[];

  switch (role) {
    case "teacher":
      links = teacherLinks;
      break;
    case "secretary":
      links = secLinks;
      break;
    case "admin":
      links = teacherLinks;
      break;
    default:
      links = studentLinks;
      break;
  }

  if (userId) {
    useChatNotifications(userId!);
  }
  const theme = useTheme();
  const setTheme = theme.setTheme;
  const [currentTheme, setCurrentTheme] = React.useState(theme.theme);

  return (
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      {links.map((link) => (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>
            <Link
              href={link.href}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{link.name}</TooltipContent>
        </Tooltip>
      ))}
      {/* <nav>
        <a
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => setCurrentTheme}
        >
          {currentTheme === "dark" ? (
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          ) : (
            <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
        </a>
      </nav> */}
    </nav>
  );
}
