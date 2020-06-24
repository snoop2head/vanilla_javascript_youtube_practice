/*controls video rendering*/

// import urls routes
import routes from "../routes";

// import models from database
import Video from "../models/Video";

// FUNCTION RESPONSE FOR http://localhost:4000/home
// async function && await job
// async && await will not move onto next line until a job is done
export const home = async (req, res) => {
  // try the function
  try {
    // awaiting for the job to be done
    const videos = await Video.find({}); // mongodb get all objects by find({})
    // console.log(videos);
    // looking for template in the project named "home"
    res.render("home", { pageTitle: "Home", videos });
    // catch the error, whereas throwing error is yielding ugly page
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// FUNCTION RESPONSE FOR http://localhost:4000/search, returns query into json format
export const search = (req, res) => {
  // console.log(req.query);
  const {
    // getting request's query and search as term
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// exporting and renders function to videoRouter.js
// FUNCTION RESPONSE FOR http://localhost:4000/videos/upload
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  // multer yields path <--- Need to figure out more
  const {
    body: { title, description },
    file: { path },
  } = req;
  // creating new video
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

// FUNCTION RESPONSE FOR http://localhost:4000/videos/id/video-detail
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// FUNCTION RESPONSE FOR http://localhost:4000/videos/id/edit-video
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("edit");
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// FUNCTION RESPONSE FOR http://localhost:4000/videos/id/delete-video
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
