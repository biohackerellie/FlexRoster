// import { auth } from '@local/auth';
import { NextRequest, NextResponse } from 'next/server';

// export default auth(function middleware(request) {
//   const response = NextResponse.next();

//   const token = request.auth;

//   if (!token) {
//     return NextResponse.rewrite(new URL('/login', request.url));
//   }

//   return response;
// });

// // export { auth as default } from '@/lib/auth';

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

export default function middileware(request: NextRequest) {
  const response = NextResponse.next();
  return response;
}
