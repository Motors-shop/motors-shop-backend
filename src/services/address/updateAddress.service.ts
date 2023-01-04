import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppErros";
import { IAdressUpdate } from "../../interfaces/address.interfaces";

export const updateAddressService = async (
  userId: string,
  addressData: IAdressUpdate
): Promise<Address> => {
  const addressRepository = AppDataSource.getRepository(Address);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  const address = await addressRepository.findOneBy({ id: user.address.id });
  if (!address) throw new AppError("Address not found", 404);

  await addressRepository.update(address.id, addressData);

  const newAddress = await addressRepository.findOneBy({ id: address.id });

  return newAddress!;
};
