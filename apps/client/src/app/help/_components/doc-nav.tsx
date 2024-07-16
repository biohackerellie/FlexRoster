"use client";

import type { Icons } from "@/components/icons";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Link } from "next-view-transitions";

import { cn } from "@local/ui";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export function DocsNav(props: { items: NavItem[] }) {
  const segment = useSelectedLayoutSegment();

  const isActive = (href: string) => {
    if (!segment) return false;
    return href.startsWith(`/${segment}`);
  };

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {props.items?.map(
        (item) =>
          item.href && (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md text-sm font-medium text-foreground/60 ring-offset-background transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                item.disabled && "cursor-not-allowed opacity-80",
                isActive(item.href) && "text-foreground",
              )}
            >
              {item.title}
            </Link>
          ),
      )}
    </nav>
  );
}
