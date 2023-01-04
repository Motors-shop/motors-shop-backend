import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  if (!process.env.SECRET_KEY) {
    return res.status(500).json({
      message: "Secret key is undefined",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    const id = decoded.sub;

    req.body.userId = id;
    req.body.userAccountType = decoded.userAccountType;

    next();
  });
};
