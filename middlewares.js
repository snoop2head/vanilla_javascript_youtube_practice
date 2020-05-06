import routes from "./routes";

// custom middleware that is used along with other apps
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Myam and Noop"; //asigning sitename which affects main.pug and footer.pug
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next(); // middleware forwarding the next handler
};
