import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const createVehicleService = async (
  vehicle: IVehicleRequest,
  userId: string
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);
  // const userRepo = AppDataSource.getRepository(User);

  // const foundUser = await userRepo.findOneBy({ id: userId });
  // if (!foundUser) throw new AppError("Invalid user", 404);

  // TODO: use foundUser at `owner`
  const newVehicle = vehicleRepo.create(vehicle);

  const finalVehicle = await vehicleRepo.save(newVehicle);

  return finalVehicle;
};
