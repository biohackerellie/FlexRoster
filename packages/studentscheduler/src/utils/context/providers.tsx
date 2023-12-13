'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
