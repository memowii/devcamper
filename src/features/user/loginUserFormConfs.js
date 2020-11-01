import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  email: "",
  password: "",
};
