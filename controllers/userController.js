// exporting and sends function to globalRouter.js
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");

// exporting and sends function to userRouter.js
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password");
