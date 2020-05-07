# Vanilla Javascript to clone youtube



## web app vs website

- Website is not interactive but just displays content.
  - Instagram
- Web app is click, search, send, upload... More user interaction. Tools like React / React Native is to make web more interactive. 
  - Netflix, YouTube 

- This project will make YouTube-like website: CRUD website with vanilla javascript.

# 1. Node Js

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

# 2. ExpressJS

## Making server with Express

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

### Node Package Manager: NPM

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

### Running Server with Express

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


### Express Configuration 

- [gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) is different from that of Python. For example, you shouldn't upload 380+ files of node_modules on GitHub.

- Get Request, Post Request
- .babelrc is where presets are stored at. 

```shell
npm install @babel/node
npm install @babel/preset-env
npm install @babel/core
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

- create [.babelrc](/.babelrc) in the project folder
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

- middleware is commenced on the lines below only. order of putting middleware matters

```javascript
app.use(betweenHome);
```

- [For example, morgan is middleware that checks logging time](https://www.npmjs.com/package/morgan)
- [Helmet is another middleware for securty](https://www.npmjs.com/package/helmet)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [Body-parser](https://www.npmjs.com/package/body-parser)

```shell
npm install morgan
npm install helmet
npm install cookie-parser
npm install body-parser
```

- MVC is a pattern
  - Model: data (like models.py in Django)
  - View: how does data look (like views in Django)
  - Controllers: function that looks for data. In this case, userRouter.
- Routers only take care of urls
  
- [Dividing video, global, user in order to separte urls](./routers)
  
- controllers are logics. 

- So far we only have two functions: users and videos

- arrow function implicitly contains "return"

  Ugly JavaScript

  ```javascript
  function something () {
    return true
  }
  ```

  Arrow JavaScript (ES6)

  ```js
  function something = () => true
  ```

- flow: routes.js + userController.js -> userRouter.js

## Project Files

- [app.js: imports express, executed express app, middlewares.](./app.js)
  - bodyparser: getting requests in forms of json or url from users
  - helmet: security 
  - morgan: logging applications defined above
- [Init.js: imports all the applications in app.js and imports database ODM](./init.js)
- routes.js: cramming all routes in one file

## Rendering templates with CRUD Controllers

* Controller is javascript function that responds to requests.
* A controller's job is to get the data and render the template(pug).
* We will make basic CRUD controllers for user and video

```javascript
res.render("templateName", {key:"value", stuff1, stuff2})
```

### [User CRUD Controller](./controllers/userController.js)

* getJoin
* afterJoin
* getLogin
* afterLogin
* logout
* editProfile
* changePassword
* userDetail

### [Video CRUD Controller](./controllers/videoController.js)

* home
* search
* getUpload
* afterUpload
* videoDetail
* editVideo
* deleteVideo

## Making template with pug

- [Pug is view engine for express, which makes HTML pretty. Thus, in the express js document, find set up for view engine.](https://expressjs.com/en/api.html#app.set)

  ```js
  app.set("view engine", "pug");
  ```

- Characteristics of pug.js are

  - [home.pug is template where you can easily write html](./views/home.pug) 
    - Just like Python, if something is inside, we just indent stuff.  Indented next line is child of the preceding element. 
    - If something is on the next line, then it means it is right next to the element on the same level. 
  - rendering variables on template
  - if statement, for statement
  - "extending" to the main template: corresponding file is attached with the main.pug

  ```
  extends layouts/main
  ```

  * "including" pug template outside of directory, partials/header.pug to the corresponding file

  ```
  include ../partials/header
  ```

  - "block" as a window for the contents to be filled in

  ```
  block content
  ```

- Following HTML codes can be written as pug.js as following:

```html
<i class="fab fa-github"></i>
```

```pug
i.fab.fa-github
```

- now we are not sending text via controller, but instead rendering pug template [in userController and in videoRouter.](./controllers)

- Adding Fontawesome between head and body

```
head
	title Noop
	script(src="https://kit.fontawesome.com/5b9f0f6c73.js", crossorigin="anonymous")
body
```

- Switch between text and JavaScript in pug like

  ```
  #{new Date().getFullYear()}
  ```

- list is li, anchor is a for HTML

- Change one thing that affects many same things, if possible.

- Partials allow us to re-use blocks of HTML

- Inside of templates, routes are connected to routes.js. For example, the editProfile pug template is connected via routes.js

```pug
//- editProfile.pug
extends layouts/main

block content
    .form__container
        form(action=routes.editProfile, method="post")
```

```javascript
const EDIT_PROFILE = "/edit-profile";
...
const routes = {
  ...
	editProfile: EDIT_PROFILE,
  ...
};
```

* Mixins are functions to be reused in other templates, just like partials
  * Different data for same HTML structure
  * Just like mixins are used in styles.scss like function, so is mixins for pug

## Routing controllers with URL

* A router is in charge of connecting(or mapping) URLS with Controller Functions

```javascript
import {controller} from "./controllers/fooController"
const fooRouter = express.Router();

fooRouter.get(URL, controller);
```

### Routers

* routes.js: making urls
  * localhost:4000/{}
  * localhost:4000/users/{}
  * localhost:4000/videos/{}
* globalRouter.js: routing localhost:4000/{} urls with both userController.js and videoController.jsp
  * userController: join functions & login functions
  * videoController: search function
* userRouter.js: routing localhost:4000/users/{} urls with userController.js
  * userController: userDetail, editProfile, changePassword functions
* videoRouter.js: routing localhost:4000/videos/{} urls with videoController.js
  * videoController: getUpload, afterUpload, videoDetail, editVideo,deleteVideo

# 3. MongoDB

* MongoDB is database
  * [MongoDB Source for Installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
  * [Installation Guide (Max OS)](https://zellwk.com/blog/install-mongodb/)
* Mongoose is ODM, like pymongo
* dotenv (.env) module can be used to hide sensitive information

# 4. Webpack





# 5. Styling



# 6. User Authentication



# 7. Relationships and Route



# 8. Custom Video Player



# 9 Recording Video with JavaScript



# 10 API + AJAX



# 11 AWS, Blob, MongoLab, Heroku



# 12. Side Notes

* Unlike python, javascript doesn't write which extension it imports. Python writes "foo_app.py" or "foo.html" on code. But in js, it just writes "fooApp" or "foo"





