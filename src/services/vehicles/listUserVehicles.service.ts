import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const listUserVehiclesService = async (
  userId: string
): Promise<Vehicle[]> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.count({ where: { id: userId } });

  if (!userExists) {
    throw new AppError("User not found", 404);
  }

  const vehicles = await vehicleRepository.find({
    where: { owner: { id: userId } },
  });

  return vehicles;
};
