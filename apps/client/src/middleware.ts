import { NextRequest, NextResponse } from "next/server";
import { decode, getToken } from "next-auth/jwt";

import { env } from "./env";

export default async function middleware(req: NextRequest) {
  // @ts-expect-error - token is not defined
  let token = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });

  if (token && token.exp! < Date.now() / 1000) {
    token = null;
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = token.roles || "student";
  const path = req.nextUrl.pathname;
  console.log("path", path);

  switch (role) {
    case "student":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      if (path === "/dashboard/teacher") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      break;
    case "teacher":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
      }
      break;
    case "admin":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      break;
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
