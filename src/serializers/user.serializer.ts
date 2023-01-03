import * as yup from "yup";

export const createUserSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthDate: yup.date().required(),
  biography: yup.string().default(""),
  accountType: yup.string().default("COMPRADOR"),
  password: yup.string().required(),
  address: yup.object().shape({
    cep: yup.string().required(),
    state: yup.string().length(2).required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().required(),
  }),
});
