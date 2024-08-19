import { Link } from "next-view-transitions";

import { buttonVariants } from "@local/ui/button";

import { Icons } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bottom-0 left-0 right-0 w-full bg-background">
      <div className="max-w-screen mx-auto w-full px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t py-4 text-gray-500 md:flex-row md:justify-between">
          <div>
            <p>
              &copy;{year}{" "}
              <Link href="https://github.com/biohackerellie">Ellie Kerns</Link>{" "}
            </p>
            <p>Licensed under the GNU General Public License v3.0</p>
          </div>
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
    </footer>
  );
}
