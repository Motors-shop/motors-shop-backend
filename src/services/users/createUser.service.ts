import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppErros";
import { IUserRequest } from "../../interfaces/users.interfaces";

export const createUserService = async (
  userData: IUserRequest
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find(
    (user) => user.email === userData.email
  );

  if (emailAlreadyExists) {
    throw new AppError("Email already in use");
  }

  const cpfAlreadyExists = users.find((user) => user.cpf === userData.cpf);

  if (cpfAlreadyExists) {
    throw new AppError("CPF already in use");
  }

  const { address } = userData;

  const user = userRepository.create({
    ...userData,
    password: await hash(userData.password, 10),
    address: await addressRepository.save(address),
  });

  await userRepository.save(user);

  const newUser = await userRepository.findOneBy({ id: user.id });

  return newUser!;
};
