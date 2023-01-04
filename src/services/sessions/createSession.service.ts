import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppErros";
import jwt from "jsonwebtoken";

export const createSessionService = async (
  email: string,
  password: string
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    { userAccountType: user.accountType },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "2h",
      subject: user.id,
    }
  );

  return token;
};
