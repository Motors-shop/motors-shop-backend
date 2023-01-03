import { Request, Response } from "express";
import { patchVehicleService } from "../../services/vehicles/patchVehicle.service";

export const patchVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, ...vehicleData } = req.body;
  const newVehicle = await patchVehicleService(id, userId, vehicleData);
  return res.json(newVehicle);
};
