"use client";

import type { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TooltipProvider } from "@local/ui/tooltip";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}
