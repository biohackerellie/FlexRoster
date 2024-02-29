import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: "app-id",
  key: "app-key",
  secret: "app-secret",
  cluster: "",
  useTLS: false,
  host: "10.50.99.84",
  port: "6001",
});

export const pusherClient = new PusherClient("app-key", {
  cluster: "",
  httpHost: "10.50.99.84",
  httpPort: 6001,
  wsHost: "10.50.99.84",
  wsPort: 6001,
  wssPort: 6001,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
});
