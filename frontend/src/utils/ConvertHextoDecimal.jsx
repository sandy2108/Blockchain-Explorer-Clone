export function ConvertHextoDecimal(hexString) {
    try {
        // Parse the hexadecimal string to decimal
        var decimalValue = parseInt(hexString, 16);

        // Convert to a string with at least 16 digits after the decimal point
        var decimalString = (decimalValue / 1e18).toFixed(18);

        // Return the result as a string with at least 16 digits after the decimal point
        return decimalString + " ETH";
    } catch (error) {
        console.error("Invalid hexadecimal string");
        return null;
    }
}
