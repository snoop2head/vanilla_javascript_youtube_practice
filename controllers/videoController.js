/*controls video rendering*/

// import urls routes
import routes from "../routes";

// import models from database
import Video from "../models/Video";

// function response for http://localhost:4000/home
// async function is waiting for the job to be done
export const home = async (req, res) => {
  // try the function or catch the error
  try {
    // mongodb get all objects by find({})
    // awaiting for the job to be done
    const videos = await Video.find({});
    // console.log(videos);
    // looking for template in the project named "home"
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// function response for http://localhost:4000/search, returns query into json format
export const search = (req, res) => {
  // console.log(req.query);
  const {
    // searchingBy equals to req.query.term
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// exporting and renders function to videoRouter.js
// function response for http://localhost:4000/videos/upload
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const afterUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

// function response for http://localhost:4000/videos/id/video-detail
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
// function response for http://localhost:4000/videos/id/edit-video
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
// function response for http://localhost:4000/videos/id/delete-video
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
