import { Link } from "next-view-transitions";

import { auth } from "@local/auth";
import { buttonVariants } from "@local/ui/button";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/siteConfig";
import { MobileDropdown } from "../app/help/_components/mobileNav";
import { Navbar } from "./navbar";

export async function Header() {
  const session = await auth();

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
          {session && (
            <div className="hidden md:flex">
              <Navbar userId={session.user.id} role={session.user.roles} />
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <MobileDropdown
            items={{
              docs: siteConfig.docNav,
            }}
          />
          <div className="hidden sm:flex">
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
          </div>
        </div>
      </div>
    </header>
  );
}
