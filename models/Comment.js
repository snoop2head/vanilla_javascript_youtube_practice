// database modeling for Comments
// https://mongoosejs.com/docs/guides.html
import mongoose from "mongoose";

// shaping the data(=making schema)
// include text, creation date for comment schema
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

// making model with comment schema written above
const model = mongoose.model("Comment", CommentSchema);

// exporting model
export default model;
