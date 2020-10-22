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
