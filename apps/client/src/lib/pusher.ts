import PusherServer from "pusher";
import PusherClient from "pusher-js";

import { env } from "@/env";

export const pusherServer = new PusherServer({
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  cluster: "",
  useTLS: false,
  host: env.NEXT_PUBLIC_PUSHER_APP_HOST,
});

export const pusherClient = new PusherClient("app-key", {
  cluster: "",
  wsHost: env.NEXT_PUBLIC_PUSHER_APP_HOST,
  forceTLS: false,
  disableStats: false,
  enabledTransports: ["ws", "wss"],
});
