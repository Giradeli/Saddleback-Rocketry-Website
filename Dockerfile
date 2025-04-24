FROM node:20 AS builder
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock ./
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine AS dist
COPY --from=builder /app/dist /usr/share/nginx/html
