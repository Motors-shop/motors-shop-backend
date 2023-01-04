import { Request, Response } from "express";
import { deleteCommentService } from "../../services/comments/deleteComment.service";

export const deleteCommentController = async (req: Request, res: Response) => {
  const commentaryId = req.params.id;
  const { userId } = req.body;
  await deleteCommentService(userId, commentaryId);
  return res.json({ message: "Commentary deleted" });
};
