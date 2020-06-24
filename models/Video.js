// database modeling for videos
// https://mongoosejs.com/docs/guides.html
import mongoose from "mongoose";

// shaping the data(=making schema)
// fileUrl, title, views, created date, comments for video
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
// mongoose.model("NAME OF MODEL", DEFINED SCHEMA)
const model = mongoose.model("Video", VideoSchema);

// exporting model
export default model;
