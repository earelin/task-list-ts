FROM node:22.15.1 AS base

ENV NODE_ENV=production

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY dist/ .

EXPOSE 3000

USER node

CMD ["node", "src/main.js"]
