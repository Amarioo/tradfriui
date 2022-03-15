FROM node:latest as builder

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run ng build  --prod

# Stage 2 - Deploy with NGNIX
FROM nginx:1.15.2-alpine

COPY --from=builder /usr/src/app/dist/tradfriui /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 81