import type { App } from "@local/server";
import { edenFetch, treaty } from "@elysiajs/eden";

import { env } from "@/env";

const fetch = edenFetch<App>(
  `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`,
);

const client = treaty<App>(
  `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`,
);

export { fetch, client };
