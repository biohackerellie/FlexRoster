import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth(function middleware(request) {
  const response = NextResponse.next();

  const token = request.auth;

  if (!token) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }

  return response;
});

// export { auth as default } from '@/lib/auth';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
