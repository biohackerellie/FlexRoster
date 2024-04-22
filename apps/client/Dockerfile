FROM node:20.12.2-alpine AS base

FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache libc6-compat
RUN apk update
RUN apk add --no-cache bash
RUN apk add --no-cache curl wget git unzip
RUN corepack enable && corepack prepare pnpm@9.0.5 --activate
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch

WORKDIR /app
RUN pnpm install -g turbo
COPY . .
RUN turbo prune client --docker

FROM base AS installer
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@9.0.5 --activate
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch

WORKDIR /app
COPY ../../.gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install 

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
COPY .env .env
# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN pnpm turbo build --filter=client...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY ../../.npmrc .npmrc
COPY ../../.env .env
COPY --from=installer /app/apps/client/next.config.js .
COPY --from=installer /app/apps/client/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/public ./apps/client/public

EXPOSE 3000

ENV PORT 3000


CMD HOSTNAME="0.0.0.0" node ./apps/client/server.js