import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: "",
  },
  status: {
    type: String,
    enum: ["todo", "done"],
    default: "todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("Todo", todoSchema)
