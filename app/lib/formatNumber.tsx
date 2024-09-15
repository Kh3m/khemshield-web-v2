export function formatNumber(price: number, option?: { decimal: boolean }) {
  const isWholeNumber = price % 1 === 0;

  const options: Intl.NumberFormatOptions = {
    currency: "ngn",
    style: option?.decimal ? "decimal" : "currency",
    minimumFractionDigits: isWholeNumber ? 0 : 2,
    maximumFractionDigits: isWholeNumber ? 0 : 2,
    minimumIntegerDigits: 2,
  };

  return new Intl.NumberFormat("en-ng", options).format(price);
}
