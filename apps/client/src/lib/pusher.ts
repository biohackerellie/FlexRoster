import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  cluster: "",
  useTLS: process.env.NODE_ENV === "production" ? true : false,
  host:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PUSHER_APP_HOST
      : "localhost",
  port: process.env.NODE_ENV === "production" ? "443" : "6001",
});

export const pusherClient = new PusherClient("app-key", {
  cluster: "",
  // httpHost: process.env.NEXT_PUBLIC_PUSHER_APP_HOST,
  wsHost:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PUSHER_APP_HOST
      : "localhost",
  wsPort: 6001,
  wssPort: 443,
  forceTLS: process.env.NODE_ENV === "production" ? true : false,
  disableStats: true,
  enabledTransports: ["wss", "ws"],
});
