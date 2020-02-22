// reference: https://expressjs.com/en/guide/routing.html
import express from "express";

var app = express();

const PORT = 4000;

// console logging that server is operating
const handleListening = () =>
  console.log(`Listening in port http://localhost:${PORT}`);

// last function that returns somthing to user
// request is req, and respond is res
const handleHome = (req, res) => res.send("Hello from Django");

// last function that returns somthing to user
// arrow function on javascript
const handleProfile = (req, res) => res.send("You are on my profile");

// routing with "/"
// middleware is in between user request and handleHome.
// middlewares are functions between connections between users and server.
// For middlewares, we put request, response and next. This is express js theory.
const betweenHome = (req, res, next) => {
  console.log("I am in between");
  next();
};

app.get("/", betweenHome, handleHome);

// middleware is commenced on the lines below
// order of putting middleware matters
app.use(betweenHome);

app.get("/profile", handleProfile);

// establishing server at port number 4000
app.listen(4000, handleListening);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
