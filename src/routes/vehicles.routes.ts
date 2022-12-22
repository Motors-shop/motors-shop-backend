import { Router } from "express";
import { createVehicleController } from "../controllers/vehicles/createVehicle.controller";
import { deleteVehicleController } from "../controllers/vehicles/deleteVehicle.controller";
import { listAllPublishedVehiclesController } from "../controllers/vehicles/listAllPublishedVehicles.controller";
import { listSessionVehiclesController } from "../controllers/vehicles/listSessionVehicles.controller";
import { listUserPublishedVehiclesController } from "../controllers/vehicles/listUserPublishedVehicles.controller";
import { patchVehicleController } from "../controllers/vehicles/patchVehicle.controller";
import { retrievePublishedVehicleController } from "../controllers/vehicles/retrievePublishedVehicle.controller";

const vehiclesRoutes = Router();

vehiclesRoutes.post("", createVehicleController);
vehiclesRoutes.get("", listAllPublishedVehiclesController);
vehiclesRoutes.get("/:id", retrievePublishedVehicleController);
vehiclesRoutes.get("/user/:id", listUserPublishedVehiclesController);
vehiclesRoutes.get("/session/user", listSessionVehiclesController);
vehiclesRoutes.patch("/:id", patchVehicleController);
vehiclesRoutes.delete("/:id", deleteVehicleController);

export default vehiclesRoutes;
