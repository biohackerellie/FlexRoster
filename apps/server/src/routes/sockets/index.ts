import { Elysia, t } from "elysia";

import { db, schema } from "@local/db";

type User = typeof schema.users.$inferSelect;
interface WebSocketConnection {
  ws: any;
  id: string;
}

const users = new Map<User["email"], WebSocketConnection>();

export const socketRoutes = new Elysia({
  prefix: "/sockets",
  websocket: {},
})
  .ws("/request", {
    headers: t.Object({
      to: t.String(),
      from: t.String(),
    }),
    open(ws) {
      console.log("Connected to request socket");
      ws.subscribe(ws.data.headers.to);
    },
    async message(ws, message) {
      const id = ws.id;
      await db.insert(schema.transferLogs).values({
        studentEmail: message as string,
        roomNumber: message as string,
        teacherName: message as string,
      });
      ws.publish(ws.data.headers.to, message);
      console.log("Received message: " + message);
    },

    close(ws) {
      ws.unsubscribe(ws.data.headers.to);
      console.log("Closed socket");
    },
  })
  .ws("/chat", {
    open(ws) {
      console.log("Connected to chat socket");
    },
    message(ws, message) {
      const { to, from, content } = JSON.parse(message as string);
      if (!users.has(from)) {
        users.set(from, { ws: ws, id: ws.id });
      }
      if (users.has(to)) {
        const toConnection = users.get(to);
        if (toConnection) {
          toConnection.ws.send(
            JSON.stringify({
              to: to,
              from: from,
              message: content,
              timestamp: Date.now(),
            }),
          );
        }
      }
    },
    close(ws) {
      users.forEach((value, key) => {
        if (value.ws === ws) {
          users.delete(key);
        }
      });
    },
    body: t.String(),
    response: t.String(),
  });
