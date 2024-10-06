FROM node:20.18.0-alpine AS base

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
RUN turbo prune @local/db --docker

FROM base AS installer
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@9.0.5 --activate
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch

WORKDIR /app

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
COPY .env .env
RUN pnpm install 

CMD ["pnpm", "db:studio"]

