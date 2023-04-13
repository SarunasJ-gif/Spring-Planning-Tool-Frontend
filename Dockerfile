FROM alpine:latest
WORKDIR /app
COPY build/ .
ENV PORT=3000
EXPOSE 3000
CMD ["npx", "serve", "-s", "."]