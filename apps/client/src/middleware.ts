import { NextRequest, NextResponse } from "next/server";
import { decode, getToken } from "next-auth/jwt";

import { env } from "./env";

export default async function middleware(req: NextRequest) {
  // @ts-expect-error
  let token = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });
  console.log(token);
  if (token && token.exp! < Date.now() / 1000) {
    token = null;
  }
  if (!token) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
