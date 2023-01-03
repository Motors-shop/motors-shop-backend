import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const deleteVehicleService = async (vehicleId: string, userId: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId, owner: {id: userId} },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  await vehicleRepository.delete(vehicleId);
};
