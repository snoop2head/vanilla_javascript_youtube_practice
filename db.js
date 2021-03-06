// import mongoose ODM to connect mongodb
import mongoose from "mongoose";

// accessing environment variables stored in .env
import dotenv from "dotenv";
dotenv.config();

// connecting mongodb using ODM: python ODM is pymongo, JS ODM is mongoose
mongoose.connect(process.env.MONGO_URL, {
  // mongoose setup, subject to change according to mongoose versions
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("🙌 Connected to DB");

const handleError = (error) =>
  console.log(`☠️ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
