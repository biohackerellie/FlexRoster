import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ScrollArea } from "@local/ui/scroll-area";

import { Footer } from "@/components/footer";
import { siteConfig } from "../../siteConfig";
import { DocsSidebarNav } from "./_components/doc-sidebar";

export const metadata: Metadata = {
  title: {
    default: "Flex | Help",
    template: "%s | Help",
  },
};

export default function HelpLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-[4.0625rem] z-30 -ml-2 -mr-2 hidden h-[calc(100vh-4.0625rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-4 lg:py-8">
            <DocsSidebarNav items={siteConfig.docNav} />
          </ScrollArea>
        </aside>
        <main className="max-w-3xl pb-16">{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
