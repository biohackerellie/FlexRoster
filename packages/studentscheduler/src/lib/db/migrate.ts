import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migratDB, migrationClient } from './index';

import * as dotenv from 'dotenv';
dotenv.config();

await migrate(migratDB, { migrationsFolder: './drizzle' });

await migrationClient.end();
