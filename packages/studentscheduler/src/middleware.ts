import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const role = token?.role;

  const { pathname } = req.nextUrl;
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }
  if (!token && pathname !== '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/api/auth', '/api/auth/:path*'],
};

// export { default } from 'next-auth/middleware';
