FROM nginx:1.16.1-alpine
COPY build/ /usr/share/nginx/html
COPY ../../../../../kau-2023-spring-edvinas-fe/nginx.conf /etc/nginx/conf.d/default.conf