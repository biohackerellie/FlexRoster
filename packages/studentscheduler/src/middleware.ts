/***
 *  Default Middleware for the application
 *  Middleware is an edge function that runs before any request to specified paths throughout the application
 * 	Middleware can be used to redirect, rewrite, or block requests
 * 	Middleware can be used to check for authentication, authorization, or other conditions
 *  @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { Role } from './lib/db';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const role = token?.role as unknown as Role;

  const pathname = req.nextUrl.pathname;

  /**
   * Set default landing page based on user role
   */
  if (token) {
    if (pathname === '/') {
      const url = req.nextUrl.clone(); // Clone the current URL object
      switch (role) {
        case 'student':
          url.pathname = '/student';
          break;
        case 'teacher':
          url.pathname = '/teacher';
          break;
        case 'secretary':
          url.pathname = '/secretary';
          break;
        case 'admin':
          url.pathname = '/admin';
          break;
      }
      return NextResponse.redirect(url);
    }
  }
  if (pathname.startsWith('/student') && role !== 'student') {
    throw new Error('Unauthorized', { cause: 'Student' });
  } else if (pathname.startsWith('/teacher') && role !== 'teacher') {
    throw new Error('Unauthorized', { cause: 'Student' });
  } else if (pathname.startsWith('/secretary') && role !== 'secretary') {
    throw new Error('Unauthorized');
  } else if (pathname.startsWith('/admin') && role !== 'admin') {
    throw new Error('Unauthorized');
  }

  if (pathname.includes('/api/auth') || pathname === '/login') {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/api/auth',
    '/api/auth/:path*',
    '/login',
    '/student',
    '/student/:path*',
    '/teacher',
    '/teacher/:path*',
    '/secretary',
    '/secretary/:path*',
    '/admin',
    '/admin/:path*',
  ],
};

// export { default } from 'next-auth/middleware';
