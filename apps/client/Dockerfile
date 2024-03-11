FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN yarn global add turbo
COPY . . 
RUN turbo prune client --docker

FROM base AS installer 
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN yarn global add pnpm && pnpm i --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo build --filter=client...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/client/next.config.js .
COPY --from=installer /app/apps/client/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/public ./apps/client/public

CMD node apps/client/server.js