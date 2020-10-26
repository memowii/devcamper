import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .min(3)
    .trim()
    .oneOf([yup.ref("password_conf"), null], "The passwords must match.")
    .required(),
  password_conf: yup
    .string()
    .min(3)
    .trim()
    .oneOf([yup.ref("password"), null], "The passwords must match.")
    .required(),
  role: yup.string().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  password_conf: "",
  role: "",
};
