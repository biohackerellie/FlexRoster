import { NextRequest, NextResponse } from "next/server";
import { decode, getToken } from "next-auth/jwt";

import { env } from "./env";

export default async function middleware(req: NextRequest) {
  // @ts-expect-error - token is not defined
  let token = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });

  console.log("hello!", token);
  const path = req.nextUrl.pathname;
  if (!token) {
    if (path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    return NextResponse.next();
  }

  const role = token.roles || "student";

  switch (role) {
    case "student":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      if (path === "/dashboard/teacher") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      if (path === "/dashboard/secretary") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      break;
    case "teacher":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
      }
      if (path === "/dashboard/secretary") {
        return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
      }
      break;
    case "admin":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
      }
      break;
    case "secretary":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/secretary", req.url));
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(new URL("/dashboard/secretary", req.url));
      }
      if (path === "/dashboard/teacher") {
        return NextResponse.redirect(new URL("/dashboard/secretary", req.url));
      }
      if (path.startsWith("/dashboard/chat")) {
        return NextResponse.redirect(new URL("/dashboard/secretary", req.url));
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
