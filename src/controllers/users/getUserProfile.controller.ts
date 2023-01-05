import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { getUserProfileService } from "../../services/users/getUserProfile.service";

export const getUserProfileController = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const user = await getUserProfileService(userId);
  return res.json(instanceToPlain(user));
};
