'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';
import { useRouter } from 'next/navigation';

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
