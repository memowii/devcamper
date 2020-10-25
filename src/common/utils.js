import jwt from "jsonwebtoken";
import { useLocalStorage } from "@rehooks/local-storage";

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

export const getLoggedInUserData = () => {
  const sessionToken = localStorage.getItem("sessionToken");

  if (!sessionToken) return null;

  const { id, role, exp } = jwt.decode(sessionToken);
  const currentTime = parseInt(Date.now() / 1000, 10);

  if (currentTime > exp) return null;

  return { id, role, exp };
};
