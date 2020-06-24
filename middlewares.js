// https://github.com/expressjs/multer
import multer from "multer";
import routes from "./routes";

// uploaded file directory
const multerVideo = multer({ dest: "uploads/videos/" });

// custom middleware that is used along with other apps
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Myam and Noop"; //asigning sitename which affects main.pug and footer.pug
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next(); // middleware forwarding the next handler
};

// uploading a file which is linked with html template upload.pug with name="videoFile"
export const uploadVideo = multerVideo.single("videoFile");
