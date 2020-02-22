// reference: https://expressjs.com/en/guide/routing.html
var express = require("express");
var app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening in port http://localhost:${PORT}`);
}

// establishing server at port number 4000
app.listen(4000, handleListening);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
