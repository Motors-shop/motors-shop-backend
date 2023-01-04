import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppErros";

export const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepository.delete(userId);
};
