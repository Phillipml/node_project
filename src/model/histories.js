import mongoose from "mongoose";

const historiesSchema = new mongoose.Schema({
  name: { type: "String" },
  title: {type:"String"},
  history: { type: "String" },
});

const histories = mongoose.model("histories", historiesSchema);

export default histories;
