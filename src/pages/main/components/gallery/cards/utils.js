export const improvePriceReadability = (value) => {
  value = value
    .toLocaleString()
    .replace(",", ".")
    .replace(",", ".")
    .replace(",", ".");
  return value;
};

export const cardsPadding =
  "px-4 px-sm-4 mx-sm-1 px-md-3 mx-md-0 px-lg-2 mx-lg-1 px-xl-3 mx-xl-0 p-xxl-2 mx-xxl-1";
