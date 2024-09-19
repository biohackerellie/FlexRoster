import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import * as schema from "./schema/schema";

const host = process.env.PGHOST ?? "localhost";
const port = process.env.PGPORT ?? 5432;
const user = process.env.PGUSER ?? "postgres";
const password = process.env.PGPASSWORD ?? "password";
const database = process.env.PGDATABASE ?? "postgres";

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
const sql = postgres(connectionString, { max: 1 });

const db = drizzle(sql, { schema });

migrate(db, { migrationsFolder: "src/drizzle" })
  .then(() => {
    console.debug("migrations completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("migrations failed", err);
    process.exit(1);
  });
