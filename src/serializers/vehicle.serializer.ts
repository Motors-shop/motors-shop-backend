import * as yup from "yup";

export const createVehicleSerializer = yup.object().shape({
  sellType: yup
    .string()
    .default("VENDA")
    .test(
      "is VENDA or LEILÃO",
      "sellType accept only 'VENDA' and 'LEILÃO'",
      (value) => value === "VENDA" || value === "LEILÃO" || value == undefined
    ),
  title: yup.string().required(),
  description: yup.string().required(),
  year: yup.string().length(4).required(),
  km: yup.string().required(),
  price: yup.string().required(),
  type: yup
    .string()
    .test(
      "is MOTO or CARRO",
      "sellType accept only 'MOTO' and 'CARRO'",
      (value) => value === "MOTO" || value === "CARRO" || value == undefined
    )
    .required(),
  isPublished: yup.boolean(),
  capeImage: yup.string().required(),
  photos: yup.array().of(yup.string()),
  userId: yup.string(),
});

export const updateVehicleSerializer = yup.object().shape({
  sellType: yup
    .string()
    .test(
      "is VENDA or LEILÃO",
      "sellType accept only 'VENDA' and 'LEILÃO'",
      (value) => value === "VENDA" || value === "LEILÃO" || value == undefined
    ),
  title: yup.string(),
  description: yup.string(),
  year: yup.string(),
  km: yup.string(),
  price: yup.string(),
  type: yup
    .string()
    .test(
      "is MOTO or CARRO",
      "sellType accept only 'MOTO' and 'CARRO'",
      (value) => value === "MOTO" || value === "CARRO" || value == undefined
    ),
  isPublished: yup.boolean(),
  capeImage: yup.string(),
  userId: yup.string(),
  photos: yup.array().of(yup.string()),
});
