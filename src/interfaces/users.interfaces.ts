export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  biography: string;
  accountType: string;
  password: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}
