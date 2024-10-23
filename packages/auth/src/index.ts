import { db, eq, schema, type SelectUser } from "@local/db";
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { cookies } from "next/headers";
import { cache } from "react";

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
  };
  const user: SelectUser = dbsession.users;

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

export const getCurrentSession = cache(
  async (): Promise<SessionValidationResult> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? null;
    if (token === null) {
      return { session: null, user: null };
    }
    const result = await validateSessionToken(token);
    return result;
  },
);

export interface Session {
  token: string;
  expiresAt: Date;
  userId: string;
}

type SessionValidationResult =
  | { session: Session; user: SelectUser }
  | { session: null; user: null };
