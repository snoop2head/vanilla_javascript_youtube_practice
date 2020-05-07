// database modeling for videos
import mongoose from "mongoose";

// schema is shape of data
const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// making model with commentschema written above
const model = mongoose.model("Comment", CommentSchema);

// exporting model
export default model;
