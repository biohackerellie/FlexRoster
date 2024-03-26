import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Providers } from "./providers";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "FLEX | Home",
  description:
    "Sit down, shut up, and read an unbanned, straight, white, christian mom approved book",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} h-full w-full bg-white antialiased bg-dot-black/[0.2]  dark:bg-black dark:bg-dot-white/[0.2]`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
