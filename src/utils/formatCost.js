export const formatCost = (cost) => {
  if (cost === undefined) return null;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  }).format(cost);
};
