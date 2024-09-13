import { edenFetch, treaty } from "@elysiajs/eden";

import type { App } from "@local/server";

const fetch = edenFetch<App>(
  `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
);

const client = treaty<App>(
  `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
);

export { fetch, client };
