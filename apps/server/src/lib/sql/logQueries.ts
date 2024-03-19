import { db, eq, schema, sql } from "@local/db";

export const allLogsQuery = db.select().from(schema.logs).prepare("allLogs");
