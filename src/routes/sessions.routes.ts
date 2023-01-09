import { Router } from "express";
import {
  createRecoveryTokenController,
  passwordRecoveryController,
} from "../controllers/passwordRecovery/controller";
import { createSessionController } from "../controllers/sessions/createSession.controller";

const sessionsRoutes = Router();

sessionsRoutes.post("", createSessionController);
sessionsRoutes.post("/recovery", passwordRecoveryController);
sessionsRoutes.post("/recovery/:code", createRecoveryTokenController);

export default sessionsRoutes;
