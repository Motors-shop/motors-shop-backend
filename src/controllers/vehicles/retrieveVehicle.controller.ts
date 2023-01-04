import { Request, Response } from "express";
import { retrieveVehicleService } from "../../services/vehicles/retrieveVehicle.service";
import { instanceToPlain } from "class-transformer";

export const retrieveVehicleController = async (
  req: Request,
  res: Response
) => {
  const vehicleId = req.params.id;
  const vehicle = await retrieveVehicleService(vehicleId);

  return res.json(instanceToPlain(vehicle));
};
