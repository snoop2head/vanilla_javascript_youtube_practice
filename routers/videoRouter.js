import express from "express";

// import routers from routes.js
import routes from "../routes";

// importing controllers from video controllers
import {
  getUpload,
  afterUpload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
// exporting videoRouter function inside of project folder

// routing for /videos/{id} if there were to use id defined in routes.js
// refer to routes.js where routes are defined
const videoRouter = express.Router();

// CRUD: create(=upload), read(=read detail), update(=edit), delete
// routing for ./upload
videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, afterUpload);
// routing for ./video-detail
videoRouter.get(routes.videoDetail(), videoDetail);
// routing for ./edit-video
videoRouter.get(routes.editVideo, editVideo);
// routing for ./delete-video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
