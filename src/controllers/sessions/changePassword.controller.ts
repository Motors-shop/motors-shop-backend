import { Request, Response } from "express";
import { changePasswordService } from "../../services/users/changePassword.service";

export const changePasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const token = req.headers.authorization?.split(" ")[1];
  await changePasswordService(password, token);
  res.status(200).json({ message: "Password changed" });
};
