import { cors } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

import {
  classRoutes,
  inboxRoutes,
  logRoutes,
  requestRoutes,
  rosterRoutes,
  scriptRoutes,
  userRoutes,
} from "./routes";

const app = new Elysia()
  .onError({ as: "global" }, ({ code, error, set }) => {
    switch (code) {
      case "NOT_FOUND":
        set.status = 404;
        return "Not found 😒";
      case "INTERNAL_SERVER_ERROR":
        set.status = 500;
        return "Internal server error 😒";
      case "VALIDATION":
        set.status = 400;
        return error.message;
      default:
        set.status = 500;
        return error.message;
    }
  })
  .group("/api", (app) =>
    app
      .use(classRoutes)
      .use(rosterRoutes)
      .use(inboxRoutes)
      .use(scriptRoutes)
      .use(userRoutes)
      .use(logRoutes)
      .use(requestRoutes),
  )
  .use(swagger())
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    }),
  );

export default app;
