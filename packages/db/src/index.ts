import type { PgSelect as Select } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as main from "./schema/schema";

export * from "drizzle-orm";
export { pgTable, PgDatabase, type PgTableFn } from "drizzle-orm/pg-core";

const host = process.env.PGHOST ?? "localhost";
const port = process.env.PGPORT ?? 5432;
const user = process.env.PGUSER ?? "postgres";
const password = process.env.PGPASSWORD ?? "password";
const database = process.env.PGDATABASE ?? "postgres";

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

const postgresSqlClient = postgres(connectionString);

export const schema = { ...main };

export const db = drizzle(postgresSqlClient, { schema });
export type SelectClassroom = typeof schema.classrooms.$inferSelect;
export type SelectClassRoster = typeof schema.students.$inferSelect;
export type SelectUser = typeof schema.users.$inferSelect;
export interface ClassRoomWithUsers extends SelectClassroom {
  users: SelectUser[];
}

export type PgSelect = Select;
