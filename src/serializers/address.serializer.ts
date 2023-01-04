import * as yup from "yup";

export const updateAddressSerializer = yup.object().shape({
  cep: yup.string(),
  state: yup.string().length(2),
  city: yup.string(),
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
  userId: yup.string(),
});
