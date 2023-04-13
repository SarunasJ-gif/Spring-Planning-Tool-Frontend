FROM nginx:1.16.1-alpine
COPY build/ /usr/share/nginx/html
COPY ../../../../../Downloads/devbridge-sourcery-sourcery-academy-2021-fall-team-justas-f73545830464/frontend/nginx.conf /etc/nginx/conf.d/default.conf