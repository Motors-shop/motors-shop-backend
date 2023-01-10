import { Request, Response } from "express";
import { deleteVehicleService } from "../../services/vehicles/deleteVehicle.service";

export const deleteVehicleController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const { userId } = req.body;
  await deleteVehicleService(vehicleId, userId);
  return res.json({ message: "Vehicle deleted" });
};
