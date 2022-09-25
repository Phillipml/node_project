import app from "./src/app.js";
const port = process.env.PORT || 3000;
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", function () {
  console.log("Conexão socket realizada");
});
httpServer.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
