import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { auth } from "@local/auth";

import { Providers } from "./providers";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "STEAM | Home",
  description:
    "Sit down, shut up, and read an unbanned, straight, white, christian mom approved book",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
