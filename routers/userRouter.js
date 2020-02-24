import express from "express";

// routing localhost:4000/
import routes from "../routes";

// importing functions from userController inside of project folder
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/usercontroller";

const userRouter = express.Router();

// routing for /users/users.
userRouter.get(routes.users, users);

// under here will bee /users/.
// routing for ./edit-profile
userRouter.get(routes.editProfile, editProfile);
// routing for ./change-password
userRouter.get(routes.changePassword, changePassword);
// routing for ./user-detail
userRouter.get(routes.userDetail, userDetail);

export default userRouter;

/*
question : when I go to '/change-password' route, it keeps shows the 'User Detail' screen..
I re-checked controllers, route files and still cannot figure out what is wrong.
Thank you!
*/

/*
Answer
userDetail is /:id
editProfile is /edit-profile

Because the 'editProfile' route is UNDER userDetail, Express thinks that /edit-profile is = /:id = userDetail.

Change the order.
*/
