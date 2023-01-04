import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppErros";
import { IUserUpdate } from "../../interfaces/users.interfaces";

export const updateUserService = async (
  userId: string,
  userData: IUserUpdate
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  if (userData.email !== undefined && userData.email !== user.email) {
    const emailAlreadyExists = await userRepository.count({
      where: { email: userData.email },
    });
    if (emailAlreadyExists) throw new AppError("Email already taken");
  }

  if (userData.cpf !== undefined && userData.cpf !== user.cpf) {
    const cpfAlreadyExists = await userRepository.count({
      where: { cpf: userData.cpf },
    });
    if (cpfAlreadyExists) throw new AppError("Email already taken");
  }

  await userRepository.update(user.id, {
    ...userData,
    password: userData.password ? await hash(userData.password, 10) : user.password,
  });

  const newUser = await userRepository.findOneBy({ id: user.id });

  return newUser!;
};
