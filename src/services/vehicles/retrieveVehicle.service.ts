import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";

export const retrieveVehicleService = async (vehicleId: string): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOneBy({ id: vehicleId });

  if (!vehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  return vehicle!;
};
