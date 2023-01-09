import { Request, Response } from "express";
import { editCommentService } from "../../services/comments/editComment.service";

export const editCommentController = async (req: Request, res: Response) => {
  const commentaryId = req.params.id;
  const { userId, commentary } = req.body;
  const comment = await editCommentService(userId, commentaryId, commentary);
  return res.json(comment);
};
