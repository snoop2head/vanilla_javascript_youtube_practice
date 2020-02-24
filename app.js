// reference: https://expressjs.com/en/guide/routing.html
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// importing function, which is not exported as default
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

// middleware: cookie parser and body parser
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// middleware: helmet is for security
app.use(helmet());
// middleware: morgan is "tiny", "common", "dev" marks time
app.use(morgan("dev"));
// using routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// exporting as default app
export default app;
