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
  title: "FULL TIME - BOOTCAMP",
  weeks: "11",
  tuition: "5000",
  minimumSkill: "beginner",
  description:
    "You will take a journey from being a novice to being a 'world class beginner' through an intensive full time route. You will become comfortable with frontend and backend coding, along with the tools, technologies and methodologies needed to navigate through to the next stage in your career.",
  scholarshipAvailable: true,
};
