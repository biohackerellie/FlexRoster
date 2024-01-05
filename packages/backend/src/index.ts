const server = Bun.serve<{ authToken: string }>({
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      return undefined;
    }
    return new Response('hello world');
  },
  websocket: {
    async message(ws, message) {
      console.log('message', message);
      ws.send(`hello ${message}`);
    },
  },
});
