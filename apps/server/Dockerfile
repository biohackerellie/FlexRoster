FROM oven/bun:latest as base



FROM base AS deps

RUN bun add -g turbo
WORKDIR /app
COPY . . 
RUN bunx turbo prune server --docker


FROM base AS installer

WORKDIR /app




COPY --from=deps /app/out/full/ .
RUN bun install 
RUN bunx turbo run build --filter=server...


FROM base AS runner
WORKDIR /app
COPY --from=installer /app/apps/server/dist ./dist
COPY --from=installer /app/apps/server/.env .env
COPY --from=installer /app/apps/server/package.json package.json
COPY --from=installer /app/apps/server/node_modules node_modules


CMD ["bun", "run", "./dist/index.js"]


