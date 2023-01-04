import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { retrieveUserService } from "../../services/users/retrieveUser.service";

export const retrieveUserController = async (req:Request, res: Response) => {
    const id = req.params.id
    const user = await retrieveUserService(id)
    return res.json(instanceToPlain(user))
}