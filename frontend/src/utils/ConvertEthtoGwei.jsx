export function ConvertEthToGwei(ethValue) {
    try {
        // Parse the Ether value to float
        var etherValue = parseFloat(ethValue);

        // Convert Ether to Gwei
        var gweiValue = etherValue * 1e9;

        // Convert to a string with at least 9 digits after the decimal point
        var gweiString = gweiValue.toFixed(9);


        return parseFloat(gweiString)
    } catch (error) {
        console.error("Invalid Ether value");
        return null;
    }
}
