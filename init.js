// importing applications and middlewares
import app from "./app";

// importing dotenv module
import dotenv from "dotenv";
dotenv.config();

// importing database connector(mongoose as ODM)
import "./db";

// importing models: video and comment models
import "./models/Video";
import "./models/Comment";

// default port is 4000 when it is not given in .env file
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅Listening on http://localhost:${PORT}`); // this is not "" but backslash

app.listen(PORT, handleListening);
