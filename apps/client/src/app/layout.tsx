import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

import { cn } from "@local/ui";

import { ThemeWrapper } from "@/components/theme-wrapper";
import { DocHeader } from "./help/_components/doc-header";

import "./styles/globals.css";

import { Toaster } from "@local/ui/sonner";
import { TooltipProvider } from "@local/ui/tooltip";

import { ThemeSwitcher } from "@/components/themeSwitcher";
import { ThemeProvider } from "@/lib/providers";

const fontCal = localFont({
  src: "./styles/calsans.ttf",
  variable: "--font-cal",
  display: "swap",
});
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const metadata: Metadata = {
  title: "FLEX | Home",
  description: "Be gay, do crime",
  applicationName: "FlexRoster",
  creator: "Ellie Kerns",
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            fontCal.variable,
            fontMono.variable,
          )}
        >
          <ThemeProvider attribute="class" enableSystem={false}>
            <ThemeWrapper className="relative flex min-h-screen flex-col">
              <DocHeader />
              <div className="flex-1">{children}</div>
            </ThemeWrapper>
            <ThemeSwitcher />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
