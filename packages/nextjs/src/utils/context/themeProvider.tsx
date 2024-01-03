'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="blue-dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
