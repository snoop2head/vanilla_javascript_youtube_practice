// database modeling for videos
import mongoose from "mongoose";

// schema is shape of data
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Date.now() function
  },
  //  getting comments model as an array
  comments: [
    {
      // directing to comments as id, by referencing comment
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

// making model with videoschema written above
const model = mongoose.model("Video", VideoSchema);

// exporting model
export default model;
