"use client";

import * as React from "react";

import { useConfig } from "@/hooks/use-config";

export function ThemeSwitcher() {
  const [config] = useConfig();

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (/^theme.*/.exec(className)) {
        document.body.classList.remove(className);
      }
    });

    const theme = config.theme;
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [config]);
  return null;
}
