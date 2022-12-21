import { Request, Response } from "express";
import { listUserPublishedVehiclesService } from "../../services/vehicles/listUserPublishedVehicles.service";

export const listUserPublishedVehiclesController = async (
  req: Request,
  res: Response
) => {
  const userId = req.params.id;
  const vehicles = await listUserPublishedVehiclesService(userId);
  return res.json(vehicles);
};
