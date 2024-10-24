import { Session, SessionValidationResult, User } from "@local/utils";
import { db, eq, schema } from "@local/db";
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { Cookie } from "elysia";

export async function validateSessionToken(
  token: string,
): Promise<SessionValidationResult> {
  const sessionToken = encodeHexLowerCase(
    sha256(new TextEncoder().encode(token)),
  );
  const dbsession = await db.query.sessions.findFirst({
    with: {
      users: true,
    },
    where: eq(schema.sessions.sessionToken, sessionToken),
  });
  if (!dbsession) {
    return { session: null, user: null };
  }
  const session: Session = {
    token: dbsession.sessionToken,
    userId: dbsession.userId,
    expiresAt: new Date(dbsession.expires),
    role: dbsession.users.role,
  };
  const user: User = dbsession.users;

  if (Date.now() >= session.expiresAt.getTime()) {
    await db
      .delete(schema.sessions)
      .where(eq(schema.sessions.sessionToken, sessionToken));
    return { session: null, user: null };
  }

  if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
    session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

    await db
      .update(schema.sessions)
      .set({
        expires: session.expiresAt,
      })
      .where(eq(schema.sessions.sessionToken, sessionToken));
  }
  return { session, user };
}
export async function createSession(
  userId: string,
  role: string,
  sessionCookie: Cookie<string | undefined> | undefined,
) {
  const token = generateSessionToken();
  const encryptedToken = encodeHexLowerCase(
    sha256(new TextEncoder().encode(token)),
  );
  const session: Session = {
    token: encryptedToken,
    userId: userId,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    role: role,
  };
  await db.insert(schema.sessions).values({
    sessionToken: session.token,
    userId: userId,
    expires: session.expiresAt,
  });
  sessionCookie?.set({
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: session.expiresAt,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}
export function generateSessionToken(): string {
  const tokenBytes = new Uint8Array(20);
  crypto.getRandomValues(tokenBytes);
  const token = encodeBase32(tokenBytes).toLowerCase();
  return token;
}

export async function invalidateSession(token: string): Promise<void> {
  await db
    .delete(schema.sessions)
    .where(eq(schema.sessions.sessionToken, token));
}

export async function invalidateUserSessions(userId: string): Promise<void> {
  await db.delete(schema.sessions).where(eq(schema.sessions.userId, userId));
}
