FROM node:14

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
EXPOSE 1337
CMD ["npm", "run", "start:dev"]
