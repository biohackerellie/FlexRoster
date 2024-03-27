FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY ./apps/client/next.config.js .
COPY ./apps/client/package.json .

COPY --chown=nextjs:nodejs ./apps/client/.next/standalone ./
COPY --chown=nextjs:nodejs ./apps/client/.next/static ./apps/client/.next/static
COPY --chown=nextjs:nodejs ./apps/client/public ./apps/client/public

EXPOSE 3000

ENV PORT 3000


CMD HOSTNAME="0.0.0.0" node ./apps/client/server.js