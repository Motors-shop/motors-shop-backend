import { Request, Response } from "express";
import { retrievePublishedVehicleService } from "../../services/vehicles/retrievePublishedVehicle.service";

export const retrievePublishedVehicleController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const vehicles = await retrievePublishedVehicleService(vehicleId);
  return res.json(vehicles);
};
