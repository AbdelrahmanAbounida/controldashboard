FROM node:16-alpine3.15
RUN addgroup abonedagroup
RUN adduser -S -G abonedagroup aboneda
RUN mkdir /app && chown app:app /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["npm", "run", "start"]
