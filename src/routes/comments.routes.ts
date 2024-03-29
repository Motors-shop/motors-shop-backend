import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComment.controller";
import { deleteCommentController } from "../controllers/comments/deleteComment.controller";
import { editCommentController } from "../controllers/comments/editComment.controller";
import { listCommentController } from "../controllers/comments/listComments.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const commentRoutes = Router();

commentRoutes.post("/:id", ensureAuthMiddleware, createCommentController);
commentRoutes.get("/:id", listCommentController);
commentRoutes.delete("/:id", ensureAuthMiddleware, deleteCommentController);
commentRoutes.patch("/:id", ensureAuthMiddleware, editCommentController);

export default commentRoutes;
