import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

// default port is 4000 when it is not given in .env file
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅Listening on http://localhost:${PORT}`); // this is not "" but backslash

app.listen(PORT, handleListening);
