import { Router } from "express";
import { createSessionController } from "../controllers/sessions/createSession.controller";

const sessionsRoutes = Router();

sessionsRoutes.post("", createSessionController);

export default sessionsRoutes;
