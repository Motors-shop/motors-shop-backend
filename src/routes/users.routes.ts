import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import {
  createUserSerializer,
  updateUserSerializer,
} from "../serializers/user.serializer";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSerializerMiddleware(createUserSerializer),
  createUserController
);
userRoutes.patch(
  "/profile",
  ensureAuthMiddleware,
  validateSerializerMiddleware(updateUserSerializer),
  updateUserController
);
userRoutes.delete(
  "/profile",
  ensureAuthMiddleware,
  deleteUserController
)

export default userRoutes;
