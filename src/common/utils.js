import jwt from "jsonwebtoken";

import {
  EMAIL_IN_USE_ERROR,
  PASSWORD_IS_SHORT_ERROR,
  INVALID_CREDENTIALS,
  PASSWORD_IS_INCORRECT,
} from "./costants";

export const capitalizeWord = (word) => word[0].toUpperCase() + word.substr(1);

export const formatCost = (cost) => {
  if (cost === undefined) return null;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  }).format(cost);
};

export const isFloat = (value) =>
  !isNaN(value) && value.toString().indexOf(".") !== -1;

export const isEmpty = (value) =>
  Object.keys(value).length === 0 && value.constructor === Object;

// TODO: Change function name for getSessionData
export const getLoggedInUserData = (token = "") => {
  let sessionToken;

  if (!token) {
    sessionToken = localStorage.getItem("sessionToken");
  } else {
    sessionToken = token;
  }

  if (!sessionToken) return null;

  const { id, role, exp } = jwt.decode(sessionToken);
  const currentTime = parseInt(Date.now() / 1000, 10);

  if (currentTime > exp) return null;

  return { id, role, exp, token: sessionToken };
};

export const getErrorType = (response) => {
  const { error } = response;

  if (error) {
    if (error.includes("Duplicate field")) return EMAIL_IN_USE_ERROR;

    if (error.includes("password") && error.includes("shorter"))
      return PASSWORD_IS_SHORT_ERROR;

    if (error.includes("Invalid credentials")) return INVALID_CREDENTIALS;

    if (error.includes("Password is incorrect")) return PASSWORD_IS_INCORRECT;
  }

  return null;
};
