import { NextFunction, Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import * as yup from "yup";

const validateSerializerMiddleware =
  (serializer: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody: IUserRequest = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validatedBody;

      return next();
    } catch (err: any) {
      if (err instanceof yup.ValidationError) {
        return res.status(400).json({
          message: err.errors,
        });
      }
    }
  };

export default validateSerializerMiddleware;
