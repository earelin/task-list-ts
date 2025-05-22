FROM node:22.15.1-bookworm-slim AS base

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY dist/ .

EXPOSE 3000

USER node

CMD ["node", "src/main.js"]
