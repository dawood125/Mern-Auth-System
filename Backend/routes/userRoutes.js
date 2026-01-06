import { getUserData } from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";
import express from "express";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);
export default userRouter;
