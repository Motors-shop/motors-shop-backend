import "dotenv/config";
import { createTransport } from "nodemailer";

import { IMail } from "../interfaces/email.interfaces";

const transporter = createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    privateKey: process.env.SMTP_API_KEY,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export function createEmail(
  targetMailAddress: string,
  subject: string,
  text: string
): IMail {
  return {
    from: process.env.SERVER_MAIL!,
    to: targetMailAddress,
    subject,
    html: text,
  };
}

export default transporter;
