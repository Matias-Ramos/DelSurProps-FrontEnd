export const improvePriceReadability = (value) => {
  value = value
    .toLocaleString()
    .replace(",", ".")
    .replace(",", ".")
    .replace(",", ".");
  return value;
};

export const printCurrencyStr = (urlPath, currency) => {
  let currencyStr = "";
  switch (true) {
    case urlPath === "/emprendimientos" || urlPath === "/venta_inmuebles":
      currencyStr = "US$";
      break;
    case urlPath === "/alquiler_inmuebles":
      currencyStr = currency === "ars" ? "AR$" : "US$";
      break;
    default:
      currencyStr = "US$";
  }
  return currencyStr;
};

export const stringifyRoom = (value, type) => {
  let stringedValue;
  value = value || "?";

  switch (true) {
    case value > 1:
      stringedValue = `${value} ${type}`;
      break;
    case value === 1:
      type === "Ambientes"
        ? (stringedValue = "Monoambiente")
        : (stringedValue = `${value} ${type.slice(0, -1)}`);
      break;
    default:
      stringedValue = `${value} ${type}`;
      break;
  }
  return stringedValue;
};
  
export const cardsPadding =
  "px-4 px-sm-4 mx-sm-1 px-md-3 mx-md-0 px-lg-2 mx-lg-1 px-xl-3 mx-xl-0 p-xxl-2 mx-xxl-1";

