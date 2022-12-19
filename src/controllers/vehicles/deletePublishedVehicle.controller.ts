import { Request, Response } from "express";
import { deletePublishedVehicleService } from "../../services/vehicles/deletePublishedVehicle.service";

export const deletePublishedVehicleController = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const vehicles = await deletePublishedVehicleService(vehicleId);
  return res.json(vehicles);
};
