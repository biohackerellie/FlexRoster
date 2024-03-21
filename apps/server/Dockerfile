
FROM oven/bun
WORKDIR /app
COPY .env .env
COPY apps/server/dist ./dist

ENV NODE_ENV production

CMD ["bun", "run", "./dist/index.js"]
EXPOSE 3030

