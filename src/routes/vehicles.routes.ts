import { Router } from "express";
import { deletePublishedVehicleController } from "../controllers/vehicles/deletePublishedVehicle.controller";
import { listAllPublishedVehiclesController } from "../controllers/vehicles/listAllPublishedVehicles.controller";
import { retrievePublishedVehicleController } from "../controllers/vehicles/retrievePublishedVehicle.controller";

const vehiclesRoutes = Router();

// vehiclesRoutes.post("", );
vehiclesRoutes.get("", listAllPublishedVehiclesController);
vehiclesRoutes.get("/:id", retrievePublishedVehicleController);
// vehiclesRoutes.get("/user/:id", );
// vehiclesRoutes.patch("/:id", );
vehiclesRoutes.delete("/:id", deletePublishedVehicleController);

export default vehiclesRoutes;
