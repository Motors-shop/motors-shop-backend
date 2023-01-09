import path from "path";
import { readFileSync } from "fs";
import { compile } from "handlebars";

import { createRecoveryCodeService } from "./createRecoveryCode.service";
import transporter, { createEmail } from "../../email";
import AppError from "../../errors/AppErros";

export const sendRecoveryEmailService = async (email: string) => {
  const recoveryCode = await createRecoveryCodeService(email);

  const emailTemplateFile = readFileSync(
    path.join(__dirname, "../..", "email", "templates", "recovery.hbs")
  );
  const handlebarsTemplate = compile(emailTemplateFile.toString("utf-8"));

  const templatedHTMLEmail = handlebarsTemplate({
    name: recoveryCode.issuer.name,
    code: recoveryCode.code,
  });

  const finalEmail = createEmail(
    email,
    `Aqui está o seu código, ${recoveryCode.issuer.name}`,
    templatedHTMLEmail
  );

  transporter.sendMail(finalEmail, (err, info) => {
    if (err) {
      console.error(err);
      throw new AppError("a" + err.message, 500);
    }

    console.log("==== EMAIL ENVIADO ====", info);
  });
};
