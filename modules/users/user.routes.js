import { Router } from "express";
import * as userController from './user.controller.js'
const router=Router();
router.post("/signUp", userController.addUser)
router.post("/login", userController.login)
router.patch("/logout", userController.logOut)



export default router;