// reference: https://expressjs.com/en/guide/routing.html
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// importing function, which is not exported as default
import { userRouter } from "./router";

const app = express();

// last function that returns somthing to user
// request is req, and respond is res
const handleHome = (req, res) => res.send("Hello from Django");

// last function that returns somthing to user
// arrow function on javascript
const handleProfile = (req, res) => res.send("You are on my profile");

// middleware: cookie parser and body parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware: helmet is for security
app.use(helmet());

// middleware: morgan is "tiny", "common", "dev" marks time
app.use(morgan("dev"));

/*
// middleware that stops the process.
const middleware = (req, res, next) => {
  res.send("not happening");
  // next(); is missing, unlike betweenhome.
};


// routing with "/"
// middleware is in between user request and handleHome.
// middlewares are functions between connections between users and server.
// For middlewares, we put request, response and next. This is express js theory.
const betweenHome = (req, res, next) => {
  console.log("I am in between");
  next();
};
*/

app.get("/", handleHome);
app.get("/profile", handleProfile);

// using routers
app.use("/user", userRouter);

/*
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
*/

// exporting as default app
export default app;
