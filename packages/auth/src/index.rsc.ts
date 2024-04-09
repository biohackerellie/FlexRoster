import type { DefaultSession, NextAuthConfig } from "next-auth";

import { cache } from "react";
import { Adapter } from "@auth/core/adapters";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { decode, getToken } from "next-auth/jwt";

import { db, InferSelectModel, pgTable, PgTableFn, schema } from "@local/db";

import { env } from "../env";
import authConfig from "./auth.config";

export type { Session } from "next-auth";

const { users, accounts, sessions, verificationTokens } = schema;
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      roles: "student" | "teacher" | "admin" | "secretary";
    } & DefaultSession["user"];
  }
  interface JWT {
    id: string;
    roles: "student" | "teacher" | "admin" | "secretary";
  }
}

declare module "@auth/core/adapters" {
  export interface AdapterUser extends InferSelectModel<typeof users> {
    roles: "student" | "teacher" | "admin" | "secretary";
  }
}

type TableFnParams = Parameters<PgTableFn>;

function dumbAdapter(
  name: TableFnParams[0],
  columns: TableFnParams[1],
  extraConfig: TableFnParams[2],
) {
  switch (name) {
    case "user":
      return users;
    case "account":
      return accounts;
    case "session":
      return sessions;
    case "verificationToken":
      return verificationTokens;
    default:
      return pgTable(name, columns, extraConfig);
  }
}
export const adapter = DrizzleAdapter(
  db,
  dumbAdapter as PgTableFn<undefined>,
) as Adapter;

const {
  handlers: { GET, POST },
  auth: defaultAuth,
  signIn,
  signOut,
} = NextAuth({
  secret: env.NEXTAUTH_SECRET,
  adapter: adapter,
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});

const auth = cache(defaultAuth);

export { decode, getToken, authConfig, signIn, signOut, GET, POST, auth };
