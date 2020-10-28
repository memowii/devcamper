import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  rating: yup.number().min(1).max(10).required(),
  title: yup.string().trim().required(),
  text: yup.string().trim().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  rating: 5,
  title: "",
  text: "",
};
