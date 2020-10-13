export const isFloat = (value) =>
  !isNaN(value) && value.toString().indexOf(".") != -1;
