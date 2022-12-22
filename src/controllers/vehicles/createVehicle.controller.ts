import { Request, Response } from "express";
import { createVehicleService } from "../../services/vehicles/createVehicle.service";

export const createVehicleController = async (req: Request, res: Response) => {
  // const { id } = req.user;
  const vehicle = await createVehicleService(req.body, "niceUserId");
  return res.status(201).json(vehicle);
};
