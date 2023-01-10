import { Request, Response } from "express";
import { listCommentService } from "../../services/comments/listComment.service";

export const listCommentController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const comment = await listCommentService(vehicleId);

  return res.json(comment);
};
