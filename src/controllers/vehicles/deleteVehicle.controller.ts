import { Request, Response } from "express";
import { deleteVehicleService } from "../../services/vehicles/deleteVehicle.service";

export const deleteVehicleController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  await deleteVehicleService(vehicleId);
  return res.json({ message: "Vehicle deleted" });
};
