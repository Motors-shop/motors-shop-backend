import "dotenv/config";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { RestoreCodes } from "../../entities/restoreCodes.entity";
import AppError from "../../errors/AppErros";

export const createRecoveryTokenService = async (
  email: string,
  code: string
) => {
  const codeRepo = AppDataSource.getRepository(RestoreCodes);

  const foundCode = await codeRepo.findOneBy({ issuer: { email }, code });
  if (!foundCode) throw new AppError("invalid code", 401);

  const recoveryToken = jwt.sign(
    {
      code: foundCode.code,
      email,
    },
    process.env.SECRET_RECOVERY_KEY!,
    {
      expiresIn: "3m",
    }
  );

  return recoveryToken;
};
