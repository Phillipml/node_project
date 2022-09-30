FROM node:latest

WORKDIR /app

COPY . /app

COPY package.json .

ENV DB_CONNECTION mongodb+srv://Phillip:Phillip123@phillipcluster.nmjbunf.mongodb.net/?retryWrites=true&w=majority

RUN npm install 

EXPOSE 3000

CMD ["node","server.js"]

