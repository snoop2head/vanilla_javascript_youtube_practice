// reference: https://expressjs.com/en/guide/routing.html
import express from "express";

var app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening in port http://localhost:${PORT}`);

// request is req, and respond is res
const handleHome = (req, res) => res.send("Hello from Django");

// arrow function on javascript
const handleProfile = (req, res) => res.send("You are on my profile");

// routing with "/"
app.get("/", handleHome);

app.get("/profile", handleProfile);

// establishing server at port number 4000
app.listen(4000, handleListening);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
