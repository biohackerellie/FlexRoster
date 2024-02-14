import { Elysia, t } from "elysia";

import { db, schema } from "@local/db";

type User = typeof schema.users.$inferSelect;

const users = new Map<User["email"], string>();

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
    message(ws, message) {
      const { to, from, content } = JSON.parse(message as string);
      if (!users.has(from)) {
        users.set(from, ws.id);
      }
      if (users.has(to)) {
        const toId = users.get(to);
        toId.send;
      }
    },
  });
