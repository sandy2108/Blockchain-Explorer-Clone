export function formatNumbers(number, decimals) {
  // Ensure that 'number' is a finite JavaScript number
  if (!isFinite(number)) {
    throw new Error('The "number" parameter must be a finite JavaScript number.');
  }

  // Use the toFixed method to round the number to the specified decimal places
  const roundedNumber = Number(number.toFixed(decimals));

  // Use toLocaleString to format the number with the specified decimal places
  return roundedNumber.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
