FROM node:20.14.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.0.5 --activate
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch

FROM base AS builder

RUN apt update && apt upgrade -y


WORKDIR /app
RUN pnpm install -g turbo
COPY . .
RUN turbo prune @local/server --docker

FROM base AS installer
RUN apt update
RUN apt install curl unzip -y

RUN curl https://bun.sh/install | bash
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install 
COPY --from=builder /app/out/full/ .
COPY .env .env
COPY .env.config .env.config
RUN pnpm turbo build --filter=@local/server...
RUN pnpm build:bun

# ?----------------------------------------

FROM gcr.io/distroless/base
WORKDIR /app
COPY --from=installer /root/.bun/bin/bun bun
COPY --from=installer /app/apps/server/dist/index.js index.js
COPY --from=installer /app/.env ./.env
COPY --from=installer /app/.env.config ./.env.config

ENV NODE_ENV production
CMD ["./bun", "--env-file=.env","--env-file=.env.config" ,"run", "./index.js"]
EXPOSE 3030

