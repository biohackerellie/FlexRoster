import { Link } from "next-view-transitions";

import { buttonVariants } from "@local/ui/button";

import { Icons } from "@/components/icons";
import ThemeToggle from "@/components/toggleTheme";
import { siteConfig } from "@/siteConfig";
import { DocsNav } from "./doc-nav";

export function DocHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="flex h-6 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="text-2xl font-medium leading-none">
              FlexRoster
            </span>
          </Link>
          <DocsNav items={siteConfig.teacherNav} />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link
            href="https://github.com/biohackerellie/FlexRoster"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
