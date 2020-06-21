import express from "express";

// import routers from routes.js
import routes from "../routes";

// importing controllers from videoController.js
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
// exporting videoRouter function inside of project folder

import { uploadVideo } from "../middlewares";

// routing for /videos/{id} if there were to use id defined in routes.js
// refer to routes.js where routes are defined
const videoRouter = express.Router();

// CRUD: create(=upload), read(=read detail), update(=edit), delete
// routing for ./upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// routing for ./video-detail
videoRouter.get(routes.videoDetail(), videoDetail);
// routing for ./edit-video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// routing for ./delete-video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
