// reference: https://expressjs.com/en/guide/routing.html
var express = require("express");
var app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening in port http://localhost:${PORT}`);
}

// request is req, and respond is res
function handleHome(req, res) {
  // console.log("functional programming rocks");
  console.log(req);
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

// routing with "/"
app.get("/", handleHome);

app.get("/profile", handleProfile);

// establishing server at port number 4000
app.listen(4000, handleListening);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
