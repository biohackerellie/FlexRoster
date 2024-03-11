import { cors } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

import { classRoutes } from "./routes/classes";
import { inboxRoutes } from "./routes/inbox";
import { rosterRoutes } from "./routes/rosters";
import { scriptRoutes } from "./routes/scripts";
import { userRoutes } from "./routes/users";

const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    }),
  )
  .state("version", 1)
  .get("/", ({ store: { version } }) => version)
  .group("/api", (app) =>
    app
      .use(classRoutes)
      .use(rosterRoutes)
      .use(inboxRoutes)
      .use(scriptRoutes)
      .use(userRoutes),
  );

export default app;
