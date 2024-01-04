import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { AuthProvider, ThemeProvider } from '@/utils/context';
import { auth, signIn } from '@student_scheduler/auth';
import React, { cache } from 'react';
import { env } from '@/env';
import { headers } from 'next/headers';

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

export default async function RootLayout(props: {
  children: React.ReactNode;
  admin: React.ReactNode;
  secretary: React.ReactNode;
  student: React.ReactNode;
  teacher: React.ReactNode;
}) {
  let children = props.children;
  const session = await auth();

  if (session) {
    if (session.roles == 'admin') {
      children = props.admin;
    } else if (session.roles == 'secretary') {
      children = props.secretary;
    } else if (session.roles == 'student') {
      children = props.student;
    } else if (session.roles == 'teacher') {
      children = props.teacher;
    }
  }

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
