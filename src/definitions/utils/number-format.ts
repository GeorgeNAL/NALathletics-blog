/**
 * It takes a number and returns a string with the number formatted
 * @param {number} value - number - The value to format.
 * @returns A function that takes a number and returns a string.
 */
const NumberFormat = (value: number) => {
  return value.toLocaleString(undefined, {
    // maximumSignificantDigits: 2,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default NumberFormat;
