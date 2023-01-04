import { Router } from "express";
import { updateAddressController } from "../controllers/address/updateAddress.controller";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { retrieveUserController } from "../controllers/users/retrieveUser.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import { updateAddressSerializer } from "../serializers/address.serializer";
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
userRoutes.delete("/profile", ensureAuthMiddleware, deleteUserController);
userRoutes.patch(
  "/address",
  ensureAuthMiddleware,
  validateSerializerMiddleware(updateAddressSerializer),
  updateAddressController
);
userRoutes.get("/:id", retrieveUserController);

export default userRoutes;
