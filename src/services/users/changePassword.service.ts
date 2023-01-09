import jwt, { JwtPayload } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

import AppDataSource from "../../data-source";
import AppError from "../../errors/AppErros";
import { User } from "../../entities/user.entity";
import { RestoreCodes } from "../../entities/restoreCodes.entity";

type JwtWithEmail = JwtPayload & {
  email: string;
};

export const changePasswordService = async (
  password: string,
  token?: string
) => {
  if (!password) throw new AppError("Invalid password", 400);
  if (!token) throw new AppError("Invalid recovery token", 404);
  const userRepo = AppDataSource.getRepository(User);
  const codeRepo = AppDataSource.getRepository(RestoreCodes);

  jwt.verify(token, process.env.SECRET_RECOVERY_KEY!, async (err, decoded) => {
    if (err) throw new AppError("Invalid recovery token", 400);

    if (decoded) {
      decoded = decoded as JwtWithEmail;

      const foundUser = await userRepo.findOneBy({
        email: decoded.email as string,
      });
      if (!foundUser) throw new AppError("Invalid recovery token", 400);

      const foundCode = await codeRepo.findOneBy({
        issuer: {
          email: decoded.email,
        },
        hasUsed: false,
      });
      if (!foundCode) throw new AppError("Expired code", 400);

      const matchPassword = await compare(password, foundUser.password);
      if (matchPassword)
        throw new AppError(
          "Your new password cannot be the same as your previous password.",
          400
        );

      foundUser.password = await hash(password, 10);
      userRepo.save(foundUser);

      foundCode.hasUsed = true;
      codeRepo.save(foundCode);
    }
  });
};
