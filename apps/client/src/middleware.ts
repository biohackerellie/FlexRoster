import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";

import authConfig from "@local/auth/auth.config";

//@ts-expect-error - Next auth typings are terrible
const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const response = NextResponse.next();
  const token = req.auth;

  const path = req.nextUrl.pathname;
  if (req.geo?.country && req.geo.country !== "US") {
    if (path.startsWith("/dashboard") || path.startsWith("/api")) {
      return notFound();
    }
  }

  if (!token) {
    if (path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }
  //@ts-expect-error - Next auth typings are terrible
  const role = token.user?.roles || "student";
  const id = token.user?.id || "0";

  switch (role) {
    case "student":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      if (path.startsWith("/dashboard/staff")) {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      if (path === "/dashboard/admin") {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }
      break;
    case "teacher":
      if (path === "/dashboard") {
        return NextResponse.redirect(
          new URL(`/dashboard/staff/${id}`, req.url),
        );
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(
          new URL(`/dashboard/staff/${id}`, req.url),
        );
      }
      if (path === "/dashboard/staff") {
        return NextResponse.redirect(
          new URL(`/dashboard/staff/${id}`, req.url),
        );
      }
      break;
    case "admin":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path === "/dashboard/staff") {
        return NextResponse.redirect(
          new URL(`/dashboard/staff/${id}`, req.url),
        );
      }
      break;
    case "secretary":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path === `/dashboard/staff/${id}`) {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path.startsWith("/dashboard/chat")) {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
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
