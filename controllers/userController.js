import routes from "../routes";

// functions that control rendering
// exporting user related function to globalRouter.js

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const afterJoin = (req, res) => {
  const {
    body: { name, email, password, confirmPassword },
  } = req;
  if (password !== confirmPassword) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const afterLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => res.render("logout");

// function response for http://localhost:4000/users/edit-profile
export const editProfile = (req, res) => res.render("editProfile");
// function response for http://localhost:4000/users/change-password
export const changePassword = (req, res) => res.render("changePassword");
// function response for http://localhost:4000/users/id/user-detail
export const userDetail = (req, res) => res.render("userDetail");
