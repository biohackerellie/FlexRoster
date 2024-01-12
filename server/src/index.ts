import app from './app';

app.listen(3030, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});

export type App = typeof app;
