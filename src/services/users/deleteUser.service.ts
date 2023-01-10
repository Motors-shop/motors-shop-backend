import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import AppError from "../../errors/AppErros";

export const deleteUserService = async (userId: string) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOne({
    where: { user: { id: userId } },
  });

  if (!address) {
    throw new AppError("User not found", 404);
  }

  await addressRepository.remove(address);
};
