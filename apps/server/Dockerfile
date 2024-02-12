FROM imbios/bun-node:latest-21-slim AS base

FROM base AS deps
RUN apt update 

WORKDIR /app

COPY ./apps/server/ .
COPY ./packages/db/prisma/ ./prisma
COPY ./apps/server/.env .env
RUN bun install --production
RUN bunx prisma generate
RUN bun build ./src/index.ts --outdir ./dist --target bun



FROM base AS runner
WORKDIR /app
COPY --from=deps /app/dist ./dist
COPY --from=deps /app/.env .env


CMD ["bun", "run", "./dist/index.js"]


