import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const deletePublishedVehicleService = async (vehicleId: string): Promise<void> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId, isPublished: true },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  await vehicleRepository.delete(vehicleId);

  return;
};
