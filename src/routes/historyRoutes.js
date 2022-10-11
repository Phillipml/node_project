import express from "express";
import historiesController from "../controller/historyController.js";

const routes = express.Router();

routes.get("/histories", historiesController.getHistories);
routes.post("/histories", historiesController.savehistory);
routes.delete("/histories", historiesController.deleteHistories);
routes.delete("/histories/:_id", historiesController.deleteHistory);

export default routes;
