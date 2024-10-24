import { entraId } from "@/lib/auth/auth";
import { client } from "@/lib/eden";
import { ObjectParser } from "@pilcrowjs/object-parser";
import { cookies } from "next/headers";
import { decodeIdToken, type OAuth2Tokens } from "arctic";

type Roles = "student" | "teacher" | "admin" | "secretary";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const cookieStore = await cookies();
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookieStore.get("entraId-state")?.value ?? null;
  const storedCodeVerifier =
    cookieStore.get("entraId-code-verifier")?.value ?? null;
  if (
    code === null ||
    state === null ||
    storedState === null ||
    storedCodeVerifier === null
  ) {
    return new Response("Invalid request", { status: 400 });
  }
  if (state !== storedState) {
    return new Response("Invalid state", { status: 400 });
  }

  const tokens = await entraId.validateAuthorizationCode(
    code,
    storedCodeVerifier,
  );
  const claims = decodeIdToken(tokens.idToken());
  console.log("claims: ", claims);
  const claimsParser = new ObjectParser(claims);

  const userId = claimsParser.getString("oid");
  const email = claimsParser.getString("email");
  const name = claimsParser.getString("name");
  const roles = claimsParser.getArray("roles") as unknown as Roles[];
  let role: Roles;
  if (roles.length > 1) {
    role = "student";
  } else role = roles[0]!;
  const { data: existingUser } = await client.api.users({ id: userId }).get();
  if (existingUser !== null) {
    await client.api.auth.session.new.post({
      role: existingUser.role,
      userId: existingUser.id,
    });
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }

  const { data: user } = await client.api.users.new.post({
    name: name,
    id: userId,
    email: email,
    role: role,
  });
  if (user === null) {
    return new Response("Failed to create user", { status: 500 });
  }
  await client.api.auth.session.new.post({
    role: user.role!,
    userId: user.id,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}
