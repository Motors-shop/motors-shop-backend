import * as yup from "yup";

export const createVehicleSerializer = yup.object().shape({
  sellType: yup.string(),
  title: yup.string().required(),
  description: yup.string().required(),
  year: yup.string().length(4).required(),
  km: yup.string().required(),
  price: yup.string().required(),
  type: yup.string().required(),
  isPublished: yup.boolean(),
  capeImage: yup.string().required(),
  photos: yup.array().of(yup.string()),
  userId: yup.string(),
});

export const updateVehicleSerializer = yup.object().shape({
  sellType: yup.string(),
  title: yup.string(),
  description: yup.string(),
  year: yup.string(),
  km: yup.string(),
  price: yup.string(),
  type: yup.string(),
  isPublished: yup.boolean(),
  capeImage: yup.string(),
  userId: yup.string(),
  photos: yup.array().of(yup.string()),
});
