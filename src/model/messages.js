import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  name: { type: "String" },
  message: { type: "String" },
});

const messages = mongoose.model("messages", messagesSchema);

export default messages;
