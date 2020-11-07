import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().trim().required(),
  weeks: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required()
    .moreThan(0)
    .integer(),
  tuition: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .moreThan(0)
    .integer()
    .required(),
  minimumSkill: yup.string().required(),
  description: yup.string().required().trim().min(50).max(500),
  scholarshipAvailable: yup.boolean().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  title: "",
  weeks: "",
  tuition: "",
  minimumSkill: "",
  description: "",
  scholarshipAvailable: false,
};
