import { NextResponse } from "next/server";
import NextAuth from "next-auth";

import authConfig from "@local/auth/auth.config";

//@ts-expect-error - roles is not defined in the user object because authjs is garbage
const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const response = NextResponse.next();

  //route to 404 between 5pm and 7am or on weekends
  const now = new Date();
  const hours = now.getHours();
  const daysOfWeek = now.getDay();
  console.log(hours);
  if (hours >= 17 || hours < 7 || daysOfWeek === 0 || daysOfWeek === 6) {
    return NextResponse.redirect(new URL("/404", req.url));
  }

  const token = req.auth;

  const path = req.nextUrl.pathname;
  if (!token) {
    if (path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }
  //@ts-expect-error - roles is not defined in the user object because authjs is garbage
  const role = token.user?.roles || "student";

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
        return NextResponse.redirect(new URL("/dashboard/secretary", req.url));
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

  return response;
});

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
