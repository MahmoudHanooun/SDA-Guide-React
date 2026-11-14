# ---------- Stage 1: build the React app ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (cached unless package files change)
COPY package*.json ./
RUN npm install

# Copy the source and create the production bundle in /app/dist
COPY . .
RUN npm run build

# ---------- Stage 2: serve with Nginx (small final image) ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
