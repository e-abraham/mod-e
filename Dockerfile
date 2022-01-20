FROM node:lts-alpine

WORKDIR /docker

COPY ["package*.json",  "./"]

RUN npm install

COPY . .

# Seed db and start server
CMD ["npm", "run", "start-dev"] 