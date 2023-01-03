import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComment.controller";
import { listCommentController } from "../controllers/comments/listComments.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const commentRoutes = Router();

commentRoutes.post("/:id", ensureAuthMiddleware, createCommentController);
commentRoutes.get("/:id", listCommentController);

export default commentRoutes;
