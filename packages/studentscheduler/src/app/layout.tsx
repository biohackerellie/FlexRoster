import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from '@/utils/context/providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'S.T.E.A.M.',
  description: 'Created by Ellie Kerns',
};

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
      <Providers>
        <body className="bg-no-repeat h-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] dark from-sky-400 to-black">
          {children}
        </body>
      </Providers>
    </html>
  );
}
