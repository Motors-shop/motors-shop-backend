import { Router } from "express";
import { createVehicleController } from "../controllers/vehicles/createVehicle.controller";
import { deleteVehicleController } from "../controllers/vehicles/deleteVehicle.controller";
import { listAllPublishedVehiclesController } from "../controllers/vehicles/listAllPublishedVehicles.controller";
import { listSessionVehiclesController } from "../controllers/vehicles/listSessionVehicles.controller";
import { listUserPublishedVehiclesController } from "../controllers/vehicles/listUserPublishedVehicles.controller";
import { retrieveVehicleController } from "../controllers/vehicles/retrieveVehicle.controller";

const vehiclesRoutes = Router();

vehiclesRoutes.post("", createVehicleController);
vehiclesRoutes.get("", listAllPublishedVehiclesController);
vehiclesRoutes.get("/:id", retrieveVehicleController);
vehiclesRoutes.get("/user/:id", listUserPublishedVehiclesController);
vehiclesRoutes.get("/session/user", listSessionVehiclesController);
// vehiclesRoutes.patch("/:id", );
vehiclesRoutes.delete("/:id", deleteVehicleController);

export default vehiclesRoutes;
