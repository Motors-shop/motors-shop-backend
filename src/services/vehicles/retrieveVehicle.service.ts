import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const retrieveVehicleService = async (
  vehicleId: string,
  userId: string
): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
  });

  if (!vehicle || vehicle.owner.id !== userId && !vehicle.isPublished) {
    throw new AppError("Vehicle not found", 404);
  }

  return vehicle;
};
