import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { env } from "./env";
import { authConfig } from "@local/auth";
import NextAuth from "next-auth";


const {auth} = NextAuth(authConfig);

export default auth((req) => {

	const token = req.auth

  console.log("hello!", token);
  const path = req.nextUrl.pathname;
  if (!token) {
    if (path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    return NextResponse.next();
  }

  const role = token.user.roles || "student";

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
})

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
