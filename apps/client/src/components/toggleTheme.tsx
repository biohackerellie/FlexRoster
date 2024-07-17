"use client";

import { MoonIcon as Moon, SunIcon as Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </TooltipTrigger>
      <TooltipContent side="right">Toggle theme</TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
