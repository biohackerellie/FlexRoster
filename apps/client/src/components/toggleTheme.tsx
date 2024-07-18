"use client";

import * as React from "react";
import {
  CheckIcon,
  MoonIcon as Moon,
  Paintbrush2Icon as Paint,
  SunIcon as Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@local/ui";
import { Button } from "@local/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@local/ui/drawer";
import { Label } from "@local/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";
import { Skeleton } from "@local/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { useConfig } from "@/hooks/use-config";
import { Theme, themeConfig, themes } from "@/lib/themes";
import { ThemeWrapper } from "./theme-wrapper";

function ThemeToggle() {
  const [config, setConfig] = useConfig();
  const { resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" variant={"ghost"} className="md:hidden">
            <Paint className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant={"ghost"}>
              <Paint className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="z-60 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
        <div className="ml-2 hidden items-center gap-0.5">
          {mounted ? (
            <>
              {["zinc", "Mulberry"].map((color) => {
                const theme = themes.find((theme) => theme.name === color);
                const isActive = config.theme === color;

                if (!theme) {
                  return null;
                }

                return (
                  <Tooltip key={theme.name}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() =>
                          setConfig({
                            ...config,
                            theme: theme.name,
                          })
                        }
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs",
                          isActive
                            ? "border-[--theme-primary]"
                            : "border-transparent",
                        )}
                        style={
                          {
                            "--theme-primary": `hsl(${
                              theme?.activeColor[
                                mode === "dark" ? "dark" : "light"
                              ]
                            })`,
                          } as React.CSSProperties
                        }
                      >
                        <span
                          className={cn(
                            "flex h-5 w-5 items-center justify-center rounded-full bg-[--theme-primary]",
                          )}
                        >
                          {isActive && (
                            <CheckIcon className="h-4 w-4 text-white" />
                          )}
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
                    >
                      {theme.label}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </>
          ) : (
            <div className="mr-1 flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [config, setConfig] = useConfig();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper
      defaultTheme="Mulberry"
      className="flex flex-col space-y-4 md:space-y-6"
    >
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Customize
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name;

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    });
                  }}
                  className={cn(
                    "justify-start",
                    isActive && "border-2 border-primary",
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]",
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <Sun className="-xtranslate-x-1 mr-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <Moon className="-xtranslate-x-1 mr-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default ThemeToggle;
