# Step 1: Build the application
FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i --legacy-peer-deps

COPY . .
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# Step 2: Set up the production environment
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY Docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]