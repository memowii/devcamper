import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  currentPassword: yup.string().required().min(6).trim(),
  newPassword: yup
    .string()
    .required()
    .min(6)
    .trim()
    .oneOf([yup.ref("newPasswordConf"), null], "The new passwords must match."),
  newPasswordConf: yup
    .string()
    .required()
    .min(6)
    .trim()
    .oneOf([yup.ref("newPassword"), null], "The new passwords must match."),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  currentPassword: "",
  newPassword: "",
  newPasswordConf: "",
};
