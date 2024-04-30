import PusherServer from "pusher";
import PusherClient from "pusher-js";

import { env } from "@/env";

export const pusherServer = new PusherServer({
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  cluster: "",
  useTLS: env.NODE_ENV === "production" ? true : false,
  host:
    env.NODE_ENV === "production"
      ? env.NEXT_PUBLIC_PUSHER_APP_HOST
      : "10.20.10.1",
  port: env.NODE_ENV === "production" ? "443" : "6001",
});

export const pusherClient = new PusherClient("app-key", {
  cluster: "",
  // httpHost: env.NEXT_PUBLIC_PUSHER_APP_HOST,
  wsHost:
    env.NODE_ENV === "production"
      ? env.NEXT_PUBLIC_PUSHER_APP_HOST
      : "10.20.10.1",
  wsPort: 6001,
  wssPort: 443,
  forceTLS: env.NODE_ENV === "production" ? true : false,
  disableStats: true,
  enabledTransports: ["wss", "ws"],
});
