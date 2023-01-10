import { Request, Response } from "express";
import { createRecoveryTokenService } from "../../services/passwordRecovery/createRecoveryToken.service";
import { sendRecoveryEmailService } from "../../services/passwordRecovery/sendRecoveryEmail.service";

export const passwordRecoveryController = async (
  req: Request,
  res: Response
) => {
  const { targetEmail, targetCode } = req.query;
  if (targetEmail && targetCode) return createRecoveryTokenController(req, res);
  console.log("-----------------------------")
  const { email } = req.body;
  await sendRecoveryEmailService(email);
  res.status(200).send({message: "Email enviado"});
};

export const createRecoveryTokenController = async (
  req: Request,
  res: Response
) => {
  const { targetEmail, targetCode } = req.query;
  const { email } = req.body;
  const { code } = req.params;
  const recoveryToken = await createRecoveryTokenService(
    targetEmail || email,
    (targetCode as string) || code
  );
  res.status(200).send({ token: recoveryToken });
};
