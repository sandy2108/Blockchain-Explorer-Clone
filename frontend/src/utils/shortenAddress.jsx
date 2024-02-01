export const getShortenAddress = (address, length = 8) => {
  if (!address) return null;

  return (
    address.slice(0, length) + "...." + address.slice(address.length - length)
  );
};

export const getShortenFirstAddress = (addresses, length = 10) => {
  if (!addresses) return null;
  return addresses.slice(0, length) + " ...";
};
