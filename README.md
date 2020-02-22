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

  

## Security & Other Stuff

- [gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) is different from that of Python. For example, you shouldn't upload 380+ files of node_modules on GitHub.



Get Request

Post Request

