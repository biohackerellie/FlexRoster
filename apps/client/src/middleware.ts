import { NextRequest, NextResponse } from "next/server";

import { getSession } from "./lib/auth/auth";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const session = await getSession();
  let token = null;
  if (session.session) {
    token = session;
  }
  const path = req.nextUrl.pathname;
  if (!token) {
    if (path.startsWith("/dashboard")) {
      const url = new URL(req.url);
      return NextResponse.redirect("/login");
    }

    return NextResponse.next();
  }
  const role = token?.user?.role ?? "student";

  switch (role) {
    case "student":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL(`/dashboard/student`, req.url));
      }

      if (path.startsWith("/dashboard/staff")) {
        return NextResponse.redirect(new URL(`/dashboard/student`, req.url));
      }
      if (path === "/dashboard/admin") {
        return NextResponse.redirect(new URL(`/dashboard/student`, req.url));
      }
      break;
    case "teacher":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL(`/dashboard/staff`, req.url));
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(new URL(`/dashboard/staff/`, req.url));
      }
      if (path === "/dashboard/admin") {
        return NextResponse.redirect(new URL(`/dashboard/staff/`, req.url));
      }
      break;
    case "admin":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }

      break;
    case "secretary":
      if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path === "/dashboard/student") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path.startsWith("/dashboard/chat")) {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }
      if (path === "/dashboard/admin") {
        return NextResponse.redirect(new URL("/dashboard/staff", req.url));
      }

      break;
  }

  return response;
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

// export function middleware(req: NextRequest) {
//   return NextResponse.next();
// }
