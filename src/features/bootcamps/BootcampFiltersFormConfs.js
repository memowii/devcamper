import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ratingDefaultValue = "any";
const budgetDefaultValue = "any";

const schema = yup.object().shape({
  rating: yup.string().notOneOf([ratingDefaultValue]).required(),
  budget: yup.string().notOneOf([budgetDefaultValue]).required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  rating: ratingDefaultValue,
  budget: budgetDefaultValue,
};
