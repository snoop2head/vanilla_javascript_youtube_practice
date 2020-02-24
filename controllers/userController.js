// exporting and sends function to globalRouter.js
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");

// exporting and sends function to userRouter.js
// function response for http://localhost:4000/users/users
export const users = (req, res) => res.send("Users");

// function response for http://localhost:4000/users/edit-profile
export const editProfile = (req, res) => res.send("Edit Profile");

// function response for http://localhost:4000/users/change-password
export const changePassword = (req, res) => res.send("Change Password");

// function response for http://localhost:4000/users/id/user-detail
export const userDetail = (req, res) => res.send("User Detail");
