import { Link } from "next-view-transitions";

import { getSession } from "@/lib/auth/auth";
import { siteConfig } from "@/siteConfig";
import { MobileDropdown } from "../app/help/_components/mobileNav";
import { Navbar } from "./navbar";

export async function Header() {
  const { session, user } = await getSession();
  let canRender = false;
  let userId;
  let roles;
  if (!session) {
    canRender = false;
  } else {
    canRender = true;
    userId = user.id;
    roles = user.role;
  }

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
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          {canRender && (
            <>
              <div className="hidden md:flex">
                <Navbar userId={userId} role={roles} />
              </div>
            </>
          )}
          <MobileDropdown
            items={{
              docs: siteConfig.docNav,
            }}
          />
        </div>
      </div>
    </header>
  );
}
