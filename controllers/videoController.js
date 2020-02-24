// exporting and sends function to globalRouter.js

// function response for http://localhost:4000/home
export const home = (req, res) => res.send("video home");
// function response for http://localhost:4000/search
export const search = (req, res) => res.send("video search");

// exporting and sends function to videoRouter.js
// function response for http://localhost:4000/videos/videos
export const videos = (req, res) => res.send("Videos");
// function response for http://localhost:4000/videos/upload
export const upload = (req, res) => res.send("Upload");
// function response for http://localhost:4000/videos/id/edit-video
export const editVideo = (req, res) => res.send("Edit Video");
// function response for http://localhost:4000/videos/id/delete-video
export const deleteVideo = (req, res) => res.send("Delete Video");
// function response for http://localhost:4000/videos/id/video-detail
export const videoDetail = (req, res) => res.send("Video Detail");
