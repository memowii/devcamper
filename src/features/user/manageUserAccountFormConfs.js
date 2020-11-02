import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().trim().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  name: "",
  email: "",
};
