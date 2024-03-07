import { NextRequest } from "next/server";

import { auth } from "@local/auth";

export async function GET(req: NextRequest) {
  const session = await auth();
  const response = new Response(JSON.stringify(session), {
    headers: {
      "content-type": "application/json",
    },
  });
  return response;
}
