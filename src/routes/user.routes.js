import { Router } from "express";
import {userregister} from "../controllers/user.controller.js"
// first we will have to import the router from express
const userRouter=Router()
// create the router variable like express app
userRouter.route("/register").post(userregister)
// in the userRouter we will post them to the method in contoller
export default userRouter
// export the router