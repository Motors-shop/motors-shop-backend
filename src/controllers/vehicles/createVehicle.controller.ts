import { Request, Response } from "express";
import { createVehicleService } from "../../services/vehicles/createVehicle.service";

export const createVehicleController = async (req: Request, res: Response) => {
  const {userId, ...vehicleData} = req.body
  const vehicle = await createVehicleService(vehicleData, userId);
  return res.status(201).json(vehicle);
};
