import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { listAllPublishedVehiclesService } from "../../services/vehicles/listAllPublishedVehicles.service";

export const listAllPublishedVehiclesController = async (
  req: Request,
  res: Response
) => {
  const vehicles = await listAllPublishedVehiclesService();
  return res.json(instanceToPlain(vehicles));
};
