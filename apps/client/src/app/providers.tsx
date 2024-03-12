"use client";

import { NextUIProvider } from "@nextui-org/react";
import { createStore, Provider } from "jotai";

const myStore = createStore();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={myStore}>{children}</Provider>
    </NextUIProvider>
  );
}
