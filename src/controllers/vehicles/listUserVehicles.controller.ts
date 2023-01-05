import { Request, Response } from "express";
import { listUserVehiclesService } from "../../services/vehicles/listUserVehicles.service";

export const listUserVehiclesController = async (
  req: Request,
  res: Response
) => {
  const userId = req.params.id;
  const vehicles = await listUserVehiclesService(userId);
  return res.json(vehicles);
};
