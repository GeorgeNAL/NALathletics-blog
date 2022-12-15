/**
 * It takes a number and returns a string with the number formatted as a price
 * @param {number} value - number - The value to format.
 * @returns A function that takes a number and returns a string.
 */
import Site from "@definitions/site";

const PriceFormat = (value: number, min = 2, max = 2) => {
  return (
    Site.defaultCurrencySymbol +
    value.toLocaleString(undefined, {
      // maximumSignificantDigits: 2,
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    })
  );
};

export default PriceFormat;
