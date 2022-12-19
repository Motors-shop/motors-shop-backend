import { Router } from "express";
import { listAllPublishedVehiclesController } from "../controllers/vehicles/listAllPublishedVehicles.controller";

const vehiclesRoutes = Router();

// vehiclesRoutes.post("", );
vehiclesRoutes.get("", listAllPublishedVehiclesController);
// vehiclesRoutes.get("/:id", );
// vehiclesRoutes.get("/user/:id", );
// vehiclesRoutes.patch("/:id", );
// vehiclesRoutes.delete("/:id", );

export default vehiclesRoutes;
