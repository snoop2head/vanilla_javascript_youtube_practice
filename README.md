# Vanilla Javascript to clone youtube



## web app vs website

- Website is not interact but just consuming content.
  - Instagram
- Web app is click, search, send, upload... More user interaction. Tools like React / React Native is to make web more interactive. 
  - Netflix, YouTube 

- However, this project will make YouTube more like website, not as interactive as it is.



## Node.js

- Javascript was orignially only for the browser

- Node.js is javascript outside of browser

- Purpose of choosing node.js over Django for the project 

  - When you need to have power of customization of everything. 
  - Starting absolutely from nothing to build a project. Django is a box of ready-made toolkits, whereas Node.js is a. box filled with legos in pieces.
  - Best case of Node.js is when you have to handle data. Lots of users chatting and sending message & Realtime stuff. In Korean, it handles "티키타카" well. 
  - Javascript doesn't have access to RAM. For example, decoding video is not for Node.js
  - We are using Node.js to make static website. Django is also good at static website too. 

- Who uses node.js?

  - Netflix, Paypal, Uber 
  - But of course, backend is consisted of different kinds of languages & modules

- If you already have brew, just

  ```shel
  brew install node
  ```

  Check Node.js version with

  ```shell
  node -v
  ```

## Express.js

- Django(Python), Lalavel(PHP), Express(JavaScript) accomplish the same thing. They make server. 

- [Make server with express.js](https://github.com/expressjs/express)

  ```javascript
  const express = require('express')
  const app = express()
  
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(3000)
  ```

## Node Package Manager: NPM

- Everybody in Node.js world puts their packages in NPM. Like Pip (or conda) of python3.
- React.js, Express.js, electron.js are all in NPM. 

```shel
npm init
```

- npm is like virtual environment of python (pipenv). It only works within repository.
- Install modules through npm, such as express. 

```
npm install express
```

## Running Server with Express

- index.js is server

- package.json, you can make shell script to initiate a process. 
  For example, after configuring package.json as 

  ```javascript
  "scripts":{
    "start":"node index.js"
  }
  ```

  Then, instead of doing

  ```shell
  node index.js
  ```

  you can simply do

  ```shell
  npm start
  ```

  

## Configuration 

- [gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) is different from that of Python. For example, you shouldn't upload 380+ files of node_modules on GitHub.

- Get Request, Post Request
- .babelrc is where presets are stored at. 

```shell
npm install @babel/node
npm install @babel/preset-env
```

- babel is transforming the code into neat format.

Before Babel 

```javascript
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
```

After Babel

```javascript
const handleHome = (req, res) => res.send("Hello from Django");

// arrow function on javascript
const handleProfile = (req, res) => res.send("You are on my profile");
```

- Save it on local by putting -D on the end.

```shell
npm install nodemon -D
```

[Check Configuration log](https://github.com/snoop2head/vanilla_javascript_youtube_practice/commit/f7d6c1c55af3740b7dab899eeb976fcf80c97862)

- We change scripts on [./package.json](./package.json) file to notate the following:
  - nodemon --exec : using nodemon which serves as "run on save"
  - babel-node : babel to use ES6, cleaner Javascript
  - --delay 2: delay 2 seconds or else nodemon and babel will run the same code twice. 

```json
"scripts": {
    "start": "nodemon --exec babel-node index.js --delay 2",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

- Javascript is functional programming. We will make function in between user request and server response.
- For middlewares, we put request, response and next. This is express js theory. 

```javascript
// middleware
const betweenHome = (req, res, next) => {
  console.log("I am in between");
  next();
};

// "/" as user request route, handleHome is server response of home. betweenHome is middleware
app.get("/", betweenHome, handleHome);
```

- middleware is commenced on the lines below only.

```javascript
app.use(betweenHome);
```

