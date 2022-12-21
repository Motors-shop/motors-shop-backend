import { Router } from "express";
import { deleteVehicleController } from "../controllers/vehicles/deleteVehicle.controller";
import { listAllPublishedVehiclesController } from "../controllers/vehicles/listAllPublishedVehicles.controller";
import { retrievePublishedVehicleController } from "../controllers/vehicles/retrievePublishedVehicle.controller";

const vehiclesRoutes = Router();

// vehiclesRoutes.post("", );
vehiclesRoutes.get("", listAllPublishedVehiclesController);
vehiclesRoutes.get("/:id", retrievePublishedVehicleController);
// vehiclesRoutes.get("/user/:id", );
// vehiclesRoutes.patch("/:id", );
vehiclesRoutes.delete("/:id", deleteVehicleController);

export default vehiclesRoutes;
