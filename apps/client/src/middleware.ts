import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll();

  const response = NextResponse.next();
  return response;
}
