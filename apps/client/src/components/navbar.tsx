"use client";

import * as React from "react";
import {
  HelpCircleIcon,
  Home,
  LineChart,
  MessageCircle,
  Search,
  Users2,
} from "lucide-react";
import { Link } from "next-view-transitions";

import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { useChatNotifications } from "@/hooks";
import ThemeToggle from "./toggleTheme";

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

  return (
    <>
      <nav className="flex items-center gap-4 px-2 sm:py-5">
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
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/help"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <HelpCircleIcon className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Help</TooltipContent>
        </Tooltip>

            <ThemeToggle />
  
      </nav>
    </>
  );
}
