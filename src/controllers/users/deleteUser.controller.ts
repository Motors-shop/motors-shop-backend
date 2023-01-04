import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req.body;
  await deleteUserService(userId);
  return res.json({ message: "User deleted" });
};
