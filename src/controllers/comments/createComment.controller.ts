import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const { commentary } = req.body;
  const vehicleId = req.params.id;
  // const { id } = req.user;
  const comment = await createCommentService(commentary, "user", vehicleId);

  return res.json(comment);
};
