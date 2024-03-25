import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { auth } from "@local/auth";

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
        className={`${GeistSans.variable} ${GeistMono.variable} dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] h-full w-full bg-white  antialiased dark:bg-black`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
