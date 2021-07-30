FROM node:16-alpine3.11

COPY [--chmod=node:node] index.js /app/
COPY [--chmod=node:node] /src /app/src

EXPOSE 3000

CMD ["node", "/app/index.js"]
