import AppDataSource from "../../data-source";
import { Photo } from "../../entities/photo.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const createVehicleService = async (
  vehicle: IVehicleRequest,
  userId: string
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);
  const photoRepo = AppDataSource.getRepository(Photo);
  // const userRepo = AppDataSource.getRepository(User);

  // const foundUser = await userRepo.findOneBy({ id: userId });
  // if (!foundUser) throw new AppError("Invalid user", 404);

  // TODO: use foundUser at `owner`
  const newVehicle = await vehicleRepo.save(vehicle);

  for (let i = 0; i < vehicle.photos.length; i++) {
    await photoRepo.save({ url: String(vehicle.photos[i]), vehicle: newVehicle });
  }

  const finalVehicle = await vehicleRepo.findOne({ where: { id: newVehicle.id } });

  return finalVehicle!;
};
