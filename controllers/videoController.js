// exporting and sends function to globalRouter.js
export const home = (req, res) => res.send("video home");
export const search = (req, res) => res.send("video search");

// exporting and sends function to videoRouter.js
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("video detail");
export const editVideo = (req, res) => res.send("edit video");
export const deleteVideo = (req, res) => res.send("delete video");
