import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { updateUserService } from "../../services/users/updateUser.service"

export const updateUserController = async (req: Request, res: Response) => {
    const {userId, ...userData} = req.body
    const newUser = await updateUserService(userId, userData)

    return res.json(instanceToPlain(newUser))
}