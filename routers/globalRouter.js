import express from "express";

// importing routers from routes.js
// routing localhost:4000/{}
import routes from "../routes"; //.. means outside of directory
import { home, search } from "../controllers/videocontroller"; // imported functions from controllers
import {
  getJoin,
  login,
  logout,
  afterJoin,
} from "../controllers/usercontroller"; // imported functions from controllers

// exporting globalRouter function inside of project folder
const globalRouter = express.Router();

// Separate router and controller!
// instead of defining functions inside the router, function was divided and was defined in ./controllers
// for example, code below is bad example of functional programming.
// videoRouter.get(routes.videos, (req, res) => res.send("Videos"));

// leads upto videos controller
// exported from userController
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// leads upto user controller
// exported from videoController
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.join, afterJoin);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
