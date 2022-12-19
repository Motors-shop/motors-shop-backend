import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";

export const listAllPublishedVehiclesService = async (): Promise<Vehicle[]> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const publishedVehicles = await vehicleRepository.find({
    where: { isPublished: true },
  });

  return publishedVehicles;
};
