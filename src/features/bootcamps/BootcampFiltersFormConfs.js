import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaulFiltertValue = "any";

const schema = yup.object().shape(
  {
    rating: yup.string().when("budget", {
      is: defaulFiltertValue,
      then: yup.string().notOneOf([defaulFiltertValue]).required(),
    }),
    budget: yup.string().when("rating", {
      is: defaulFiltertValue,
      then: yup.string().notOneOf([defaulFiltertValue]).required(),
    }),
  },
  [["budget", "rating"]]
);

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  rating: defaulFiltertValue,
  // rating: 8,
  budget: defaulFiltertValue,
  // budget: 8000,
};
