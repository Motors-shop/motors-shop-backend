import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const retrieveVehicleService = async (vehicleId: string): Promise<Object> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
    relations: { owner: true },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  return { ...vehicle, owner: vehicle.owner.id };
};
