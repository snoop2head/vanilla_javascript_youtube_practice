import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Myam and Noop"; //asigning sitename which affects main.pug and footer.pug
  res.locals.routes = routes;
  next(); // middleware forwarding the next handler
};
