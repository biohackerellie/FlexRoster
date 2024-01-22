// import { auth } from '@/lib/auth';
// import { NextResponse } from 'next/server';

// export default auth(function middleware(request) {
//   const response = NextResponse.next();

//   const token = request.auth;

//   // if (!token) {
//   //   const url = request.nextUrl.clone();
//   //   url.pathname = '/login';
//   //   return NextResponse.rewrite(url);
//   // }

//   return response;
// });

export { auth as default } from '@/lib/auth';
