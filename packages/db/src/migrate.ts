import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import * as schema from "./schema/schema";

const sql = postgres(process.env.DIRECT_URL!, { max: 1 });

const db = drizzle(sql, { schema });

migrate(db, { migrationsFolder: "src/drizzle" })
  .then(() => {
    console.log("migrations completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("migrations failed", err);
    process.exit(1);
  });
