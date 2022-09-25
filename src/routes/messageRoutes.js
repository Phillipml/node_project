import express from "express";
import messagesController from "../controller/messageController.js";

const routes = express.Router();

routes.get("/messages", messagesController.getMessages);
routes.post("/messages", messagesController.saveMessage);
routes.delete("/messages", messagesController.deleteMessages);
routes.delete("/messages/:_id", messagesController.deleteMessage);

export default routes;
