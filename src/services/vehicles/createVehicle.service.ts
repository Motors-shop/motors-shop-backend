import AppDataSource from "../../data-source";
import { Photo } from "../../entities/photo.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const createVehicleService = async (
  vehicle: IVehicleRequest,
  userId: string
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);
  const photoRepo = AppDataSource.getRepository(Photo);
  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ id: userId });
  if (!foundUser) throw new AppError("Invalid user", 404);

  if (foundUser.accountType === "COMPRADOR")
    throw new AppError("Account has not permission to perform action", 404);

  const newVehicle = await vehicleRepo.save({ ...vehicle, owner: foundUser });

  await Promise.all(
    vehicle.photos.map(async (photo) => {
      await photoRepo.save({ url: String(photo), vehicle: newVehicle });
    })
  );

  const finalVehicle = await vehicleRepo.findOneBy({ id: newVehicle.id });

  return finalVehicle!;
};
