import { Request, Response } from "express";
import { updateAddressService } from "../../services/address/updateAddress.service";

export const updateAddressController = async (req: Request, res: Response) => {
  const { userId, ...addressData } = req.body;
  const address = await updateAddressService(userId, addressData);
  return res.json(address);
};
