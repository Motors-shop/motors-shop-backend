import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import AppError from "../../errors/AppErros";
import { Commentary } from "../../entities/commentary.entity";

export const createCommentService = async (
  commentary: string,
  userId: string,
  vehicleId: string
): Promise<Commentary> => {
  const userRepo = AppDataSource.getRepository(User);
  const commentRepo = AppDataSource.getRepository(Commentary);
  const vehicleRepo = AppDataSource.getRepository(Vehicle);

  const user = await userRepo.findOneBy({ id: userId });
  if (!user) throw new AppError("Invalid user", 404);

  const vehicle = await vehicleRepo.findOneBy({ id: vehicleId });
  if (!vehicle) throw new AppError("Vehicle not found", 404);
  if (vehicle.owner.id === userId) {
    throw new AppError("Cannot comment own announcement", 404);
  }

  const alreadyCommented = await commentRepo.findOne({
    where: { vehicle: { id: vehicleId }, user: { id: userId } },
  });

  if (alreadyCommented) throw new AppError("One comment per announcement", 404);

  const comment = await commentRepo.save({ commentary: commentary, vehicle });

  return comment;
};
