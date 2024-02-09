FROM node:20-alpine AS installer


RUN apk add --no-cache libc6-compat 
RUN apk update 

WORKDIR /app
RUN yarn global add turbo
COPY . . 
RUN npx turbo prune server --docker



# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
# RUN yarn global add pnpm && pnpm i --frozen-lockfile




FROM oven/bun
WORKDIR /app
RUN bun install -g openssl
COPY --from=installer /app/out/full/apps/server .

RUN bun install
RUN bunx prisma generate
ENV NODE_ENV=production
CMD ["bun", "src/index.ts"]

EXPOSE 3030



