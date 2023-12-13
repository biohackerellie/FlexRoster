// import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

// export default auth((req) => {
//   console.log('req', req);
//   return NextResponse.next();
// });

export default function middleware(req, ev) {
  return NextResponse.next();
}
