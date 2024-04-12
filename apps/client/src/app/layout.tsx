import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { Toaster } from "@local/ui/sonner";

import { ThemeProvider } from "@/lib/providers";

export const metadata: Metadata = {
  title: "FLEX | Home",
  description: "Be gay, do crime",
  applicationName: "FlexRoster",
  creator: "Ellie Kerns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} h-full w-full  items-center justify-center  bg-white bg-grid-small-black/[0.2]  dark:bg-black dark:bg-grid-small-white/[0.2]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
