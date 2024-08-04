import { Router } from "express";
import * as postController from './posts.controller.js'

const router=Router();
router.post("/addPost", postController.addPost)
router.get("/getPosts", postController.getPosts)
router.get("/getSpecificPost", postController.getSpecificPost)

router.put("/updatePost", postController.updatePost)
router.delete("/deletePost", postController.deletePost)








export default router;