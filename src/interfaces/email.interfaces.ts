export interface IMailBodyRequest {
  subject: string;
  html: string;
}

export interface IMail extends IMailBodyRequest {
  from: string;
  to: string;
}

export interface IRecoveryRequest {
  email: string;
}
