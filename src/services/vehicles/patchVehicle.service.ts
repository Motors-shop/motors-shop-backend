import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const patchVehicleService = async (
  vehicleId: string,
  vehicleBody: IVehicleRequest
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);
  // const userRepo = AppDataSource.getRepository(User);

  // const foundUser = await userRepo.findOneBy({ id: userId });
  // if (!foundUser) throw new AppError("Invalid user", 404);

  const foundVehicle = await vehicleRepo.findOneBy({ id: vehicleId });
  if (!foundVehicle) throw new AppError("Vehicle does not exists", 404);

  const newVehicle = vehicleRepo.create({ ...foundVehicle, ...vehicleBody });
  const finalVehicle = vehicleRepo.save(newVehicle);

  return finalVehicle;
};
