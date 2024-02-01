import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'STEAM',
  description:
    'Sit down, shut up, and read an unbanned, straight, white, christian mom approved book',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
