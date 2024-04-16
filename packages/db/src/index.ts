import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as main from "./schema/schema";

export * from "drizzle-orm";
export { pgTable, PgDatabase, type PgTableFn } from "drizzle-orm/pg-core";

const connectionString = process.env.DATABASE_URL!;

const postgresSqlClient = postgres(connectionString);

export const schema = { ...main };

export const db = drizzle(postgresSqlClient, { schema });
export type SelectClassroom = typeof schema.classrooms.$inferSelect;
export type SelectClassRoster = typeof schema.students.$inferSelect;
export type SelectUser = typeof schema.users.$inferSelect;
export interface ClassRoomWithUsers extends SelectClassroom {
  users: SelectUser[];
}
