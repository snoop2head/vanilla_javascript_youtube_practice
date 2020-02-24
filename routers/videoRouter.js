import express from "express";

// importing routers from routes.js
import routes from "../routes";
import {
  // videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";
// exporting videoRouter function inside of project folder

// routing for /videos/{id} if there were to use id defined in routes.js
// refer to routes.js where routes are defined
const videoRouter = express.Router();

// refer to routes.js
// routing for ./upload
videoRouter.get(routes.upload, upload);
// routing for ./edit-video
videoRouter.get(routes.editVideo, editVideo);
// routing for ./delete-video
videoRouter.get(routes.deleteVideo, deleteVideo);
// routing for ./video-detail
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
