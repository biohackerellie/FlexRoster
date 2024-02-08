import { Elysia, t } from 'elysia';
import prisma from '@/lib/prisma';

export const socketRoutes = new Elysia({
  prefix: '/sockets',
  websocket: {},
}).ws('/request', {
  headers: t.Object({
    to: t.String(),
    from: t.String(),
  }),
  open(ws) {
    console.log('Connected to request socket');
    ws.subscribe(ws.data.headers.to);
  },
  async message(ws, message) {
    const id = ws.id;

    await prisma.transferLogs.create({
      data: {
        studentEmail: message as string,
        roomNumber: message as string,
        teacherName: message as string,
      },
    });
    ws.publish(ws.data.headers.to, message);
    console.log('Received message: ' + message);
  },

  close(ws) {
    ws.unsubscribe(ws.data.headers.to);
    console.log('Closed socket');
  },
});
