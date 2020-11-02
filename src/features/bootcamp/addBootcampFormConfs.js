import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const careersDefaultValue = "Select all that apply";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  address: yup.string().trim().required(),
  phone: yup.string().required().trim().max(20),
  email: yup.string().email().trim().required(),
  website: yup
    .string()
    .required()
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS. Ex.: http://example.com/"
    ),
  description: yup.string().required().min(50).max(500),
  careers: yup
    .array()
    .compact((v) => v === careersDefaultValue)
    .required(),
  housing: yup.boolean().required(),
  jobAssistance: yup.boolean().required(),
  jobGuarantee: yup.boolean().required(),
  acceptGi: yup.boolean().required(),
});

export const schemaResolver = yupResolver(schema);

export const defaultValues = {
  name: "",
  address: "",
  phone: "",
  email: "",
  website: "",
  description: "",
  careers: careersDefaultValue,
  housing: false,
  jobAssistance: false,
  jobGuarantee: false,
  acceptGi: false,
};
