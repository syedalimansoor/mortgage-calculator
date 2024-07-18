/**
 * Format a number to have thousands separator and two decimal places
 * @param value
 * @returns
 */
export default function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}
