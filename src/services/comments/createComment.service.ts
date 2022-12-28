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

  // const user = await userRepo.findOneBy({id:userId})
  // if (!foundUser) throw new AppError("Invalid user", 404);

  const vehicle = await vehicleRepo.findOneBy({ id: vehicleId });
  if (!vehicle) throw new AppError("Vehicle not found", 404);

  const comment = await commentRepo.save({ commentary: commentary, vehicle });

  return comment;
};
