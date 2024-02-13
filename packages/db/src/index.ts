import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as main from './schema/schema';

export * from 'drizzle-orm';
export { pgTable, PgDatabase, type PgTableFn } from 'drizzle-orm/pg-core';
declare module global {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

const connectionString = process.env.DATABASE_URL as string;

let postgresSqlClient;

if (process.env.NODE_ENV !== 'production') {
  if (!global.postgresSqlClient) {
    global.postgresSqlClient = postgres(connectionString);
  }
  postgresSqlClient = global.postgresSqlClient;
} else {
  postgresSqlClient = postgres(connectionString);
}
export const schema = { ...main };
export const db = drizzle(postgresSqlClient, { schema });
