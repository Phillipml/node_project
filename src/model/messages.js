import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  name: { type: "String", unique: "true" },
  message: { type: "String" },
});

const messages = mongoose.model("messages", messagesSchema);

export default messages;
