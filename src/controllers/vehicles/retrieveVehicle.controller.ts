import { Request, Response } from "express";
import { retrieveVehicleService } from "../../services/vehicles/retrieveVehicle.service";

export const retrieveVehicleController = async (
  req: Request,
  res: Response
) => {
  const vehicleId = req.params.id;
  const { userId } = req.body;
  const vehicle = await retrieveVehicleService(vehicleId, userId);
  return res.json(vehicle);
};
