// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";

// export default {
//   async fetch(request: Request): Promise<Response> {
//     const client = new Client({ connectionString: process.env.DATABASE_URL });
//     await client.connect();
//     const db = drizzle(client);
//     const result = await db.select().from(...request);
//     // Clean up the client, ensuring we don't kill the worker before that is completed.
//     await client.end();
//     return new Response();
//   },
// };
