import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const { commentary, userId } = req.body;
  const vehicleId = req.params.id;
  const comment = await createCommentService(commentary, userId, vehicleId);

  return res.status(201).json(comment);
};
