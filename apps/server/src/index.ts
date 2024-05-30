import { logger } from "@local/utils";

import app from "./app";
import { env } from "./env";

app.listen(env.SERVER_PORT, () => {
  logger.info(
    `💩 FLEXible pile of shit being served at ${app.server?.hostname}:${app.server?.port}`,
  );
});

export type App = typeof app;
