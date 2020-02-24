// controlling rendering
// exporting and sends function to globalRouter.js
export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");

// function response for http://localhost:4000/users/edit-profile
export const editProfile = (req, res) => res.render("editProfile");
// function response for http://localhost:4000/users/change-password
export const changePassword = (req, res) => res.render("changePassword");
// function response for http://localhost:4000/users/id/user-detail
export const userDetail = (req, res) => res.render("userDetail");
