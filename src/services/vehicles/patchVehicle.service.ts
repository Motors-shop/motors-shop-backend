import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const patchVehicleService = async (
  vehicleId: string,
  userId: string,
  vehicleBody: IVehicleRequest
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);

  const foundVehicle = await vehicleRepo.findOne({
    where: { id: vehicleId, owner: { id: userId } },
  });
  if (!foundVehicle) throw new AppError("Vehicle does not exists", 404);

  vehicleRepo.update(foundVehicle.id, vehicleBody);
  const vehicle = await vehicleRepo.findOneBy({ id: vehicleId });

  return vehicle!;
};
