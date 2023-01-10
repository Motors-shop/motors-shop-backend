import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users.interfaces";
import { createUserService } from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const user = await createUserService(userData);

  return res.status(201).send(instanceToPlain(user));
};
