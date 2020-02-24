import express from "express";

import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";
// exporting videoRouter function inside of project folder

const videoRouter = express.Router();

// routing for /videos/videos.
videoRouter.get(routes.videos, videos);

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
