import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const deleteVehicleService = async (vehicleId: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  await vehicleRepository.delete(vehicleId);
};
