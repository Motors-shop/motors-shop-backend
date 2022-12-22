import { Request, Response } from "express";
import { patchVehicleService } from "../../services/vehicles/patchVehicle.service";

export const patchVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newVehicle = await patchVehicleService(id, req.body);
  return res.json(newVehicle);
};
