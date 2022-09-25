import express from "express";
import bodyParser from "body-parser";
import messages from "./model/messages.js";
import route from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.on(
  "error",
  console.log.bind(console, "Erro ao tentar se conectar ao banco de dados")
);
connection.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.get("/messages", (_, res) => {
  messages.find({}, (_, messages) => {
    res.send(messages);
  });
});

export default app;
