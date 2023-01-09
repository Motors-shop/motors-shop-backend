import { MoreThan } from "typeorm";

import AppDataSource from "../../data-source";
import AppError from "../../errors/AppErros";
import { User } from "../../entities/user.entity";
import { RestoreCodes } from "../../entities/restoreCodes.entity";

function generateCode(length: number = 6) {
  let code: string = "";

  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10);
  }

  return code;
}

export const createRecoveryCodeService = async (email: string) => {
  const codeRepo = AppDataSource.getRepository(RestoreCodes);
  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ email });
  if (!foundUser) throw new AppError("Invalid user", 404);

  const EXPIRES_IN_HOURS = 2;
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 1000 * 60 * 60 * EXPIRES_IN_HOURS);

  const now = new Date();
  const existentValidCode = await codeRepo.findOne({
    where: {
      issuer: {
        id: foundUser.id,
      },
      expiresAt: MoreThan(now),
      hasUsed: false,
    },
  });

  if (existentValidCode) {
    existentValidCode.issuer = foundUser;
    return existentValidCode;
  }

  const finalCode = await codeRepo.save({
    code: generateCode(),
    expiresAt: expireDate,
    issuer: foundUser,
  });

  return finalCode;
};
