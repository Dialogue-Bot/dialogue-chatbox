FROM node:20



WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 5174

CMD [ "npm", "run", "start" ]