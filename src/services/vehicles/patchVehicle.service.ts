import AppDataSource from "../../data-source";
import { Photo } from "../../entities/photo.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";
import { IVehicleRequest } from "../../interfaces/vehicles.interfaces";

export const patchVehicleService = async (
  vehicleId: string,
  userId: string,
  vehicleBody: IVehicleRequest
): Promise<Vehicle> => {
  const vehicleRepo = AppDataSource.getRepository(Vehicle);
  const photoRepo = AppDataSource.getRepository(Photo);

  const foundVehicle = await vehicleRepo.findOne({
    where: { id: vehicleId, owner: { id: userId } },
  });
  if (!foundVehicle) throw new AppError("Vehicle does not exists", 404);

  const { photos, ...vehicleData } = vehicleBody;

  const vehiclePhotos = await photoRepo.find({
    where: { vehicle: { id: foundVehicle.id } },
  });

  if (photos !== undefined) {
    await Promise.all(
      photos.map(async (photo) => {
        const photoExists = await photoRepo.count({
          where: { url: String(photo), vehicle: { id: foundVehicle.id } },
        });
        if (!photoExists) {
          await photoRepo.save({ url: photo, vehicle: foundVehicle });
        }
      })
    );
    await Promise.all(
      vehiclePhotos.map(async (photo) => {
        if (!photos.includes(photo.url)) {
          await photoRepo.delete(photo.id);
        }
      })
    );
  }

  await vehicleRepo.update(foundVehicle.id, vehicleData);
  const vehicle = await vehicleRepo.findOneBy({ id: vehicleId });

  return vehicle!;
};
