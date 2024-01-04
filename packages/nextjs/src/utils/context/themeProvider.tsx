'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';
import { useRouter } from 'next/navigation';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextThemesProvider attribute="class" defaultTheme="blue-dark">
      {children}
    </NextThemesProvider>
  );
}
