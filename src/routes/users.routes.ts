import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import { createUserSerializer } from "../serializers/user.serializer";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSerializerMiddleware(createUserSerializer),
  createUserController
);

export default userRoutes;
