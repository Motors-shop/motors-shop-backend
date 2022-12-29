import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComment.controller";
import { listCommentController } from "../controllers/comments/listComments.controller";

const commentRoutes = Router();

commentRoutes.post("/:id", createCommentController);
commentRoutes.get("/:id", listCommentController);

export default commentRoutes;
