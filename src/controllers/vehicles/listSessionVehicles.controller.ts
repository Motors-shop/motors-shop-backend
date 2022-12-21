import { Request, Response } from "express";
import { listSessionVehiclesService } from "../../services/vehicles/listSessionVehicles.service";

export const listSessionVehiclesController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.body;
  const vehicles = await listSessionVehiclesService(userId);
  return res.json(vehicles);
};
