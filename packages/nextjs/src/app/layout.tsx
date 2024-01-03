import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { AuthProvider, ThemeProvider } from '@/utils/context';
import { cache } from 'react';
import { env } from '@/env';
import { headers } from 'next/headers';
import Sidebar from '@/components/ui/navigation/sidebar';

import '@/styles/globals.css';
import { TRPCReactProvider } from '@/trpc/react';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NODE_ENV === 'production'
      ? 'https://STEAM.laurel.k12.mt.us'
      : 'http://localhost:3000'
  ),
  title: 'S.T.E.A.M.',
  description: 'Student Steam Scheduler',
  authors: [{ name: 'Ellie Kerns', url: 'github.com/biohackerellie' }],
  creator: 'Ellie Kerns',
  publisher: 'EPKLabs',
};

const getHeaders = cache(async () => headers());

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} `}
      suppressHydrationWarning
    >
      <body className=" h-screen bg-no-repeat dark text-foreground bg-background antialiased ">
        <ThemeProvider>
          <TRPCReactProvider headersPromise={getHeaders()}>
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
