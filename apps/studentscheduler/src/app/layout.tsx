import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { AuthProvider, ThemeProvider } from '@/utils/context';
import Sidebar from '@/components/ui/navigation/sidebar';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'S.T.E.A.M.',
  description: 'Student Steam Scheduler',
  authors: [{ name: 'Ellie Kerns', url: 'github.com/biohackerellie' }],
  creator: 'Ellie Kerns',
  publisher: 'EPKLabs',
};
const gradient =
  'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] dark from-sky-400 to-black';

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

        <ThemeProvider>
          <body className=" h-screen bg-no-repeat dark text-foreground bg-background  ">
            {children}
          </body>
        </ThemeProvider>

    </html>
  );
}
