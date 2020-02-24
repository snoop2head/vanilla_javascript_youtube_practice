// controlling rendering

// exporting and sends function to globalRouter.js
// function response for http://localhost:4000/home
export const home = (req, res) => res.render("home", { pageTitle: "Home" }); // looking for template in the project named "home"
// function response for http://localhost:4000/search
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

// exporting and renders function to videoRouter.js
// function response for http://localhost:4000/videos/upload
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
// function response for http://localhost:4000/videos/id/video-detail
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
// function response for http://localhost:4000/videos/id/edit-video
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
// function response for http://localhost:4000/videos/id/delete-video
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
