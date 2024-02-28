import { NextRequest, NextResponse } from "next/server";

// import { auth } from "@local/auth";

// export default auth((req) => {
//   console.log("middleware", req.auth);

//   const response = NextResponse.next();
//   return response;
// });

export default function middleware(req: NextRequest) {
  const response = NextResponse.next();
  return response;
}
