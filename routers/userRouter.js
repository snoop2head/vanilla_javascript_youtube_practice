import express from "express";

// exporting userRouter function inside of project folder
export const userRouter = express.Router();

/*
// making anonymous function inside of router, instead of calling function
userRouter.get("/", (req, res) => res.send("user index")); //index of router
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
*/

export default userRouter;
