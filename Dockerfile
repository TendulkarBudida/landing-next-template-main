# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM node:23-slim
WORKDIR /app

RUN npm install -g bun

COPY package.json .
RUN bun install

COPY . .

ENV NODE_ENV=production
RUN bun run build


EXPOSE 3000
ENTRYPOINT [ "bun", "run", "start" ]
