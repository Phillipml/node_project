import express from "express";
import messages from "./messageRoutes.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const index = path.join(__dirname, "../../index.html");

const route = (app) => {
  app.route("/").get((_, res) => {
    res.sendFile(path.join(index));
  });
  app.use(express.json(), messages);
};
export default route;
