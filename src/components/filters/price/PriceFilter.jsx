import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import { useEffect } from "react";

const PriceFilter = ({
  updateQyParams,
  deleteQyParam,
  dispatch,
  filters,
  priceInitQyParams,
  priceLimitQyParams,
}) => {
  const chgReducerPrice = (newPrice, dispatchType) =>
    dispatch({
      type: dispatchType,
      newPrice: newPrice,
    });
  const handleChange = (evt, edge) => {
    edge === "init" && chgReducerPrice(evt.target.value, "initPriceChgd");
    edge === "limit" && chgReducerPrice(evt.target.value, "limitPriceChgd");
  };
  const handleSubmit = () => {
    filters.price.init
      ? updateQyParams("price_init", filters.price.init)
      : deleteQyParam("price_init");

    filters.price.limit
      ? updateQyParams("price_limit", filters.price.limit)
      : deleteQyParam("price_limit");
  };
  const handleClean = () => {
    deleteQyParam("price_init");
    deleteQyParam("price_limit");
    chgReducerPrice('', "initPriceChgd");
    chgReducerPrice('', "limitPriceChgd");
  };

  useEffect(() => {
    priceInitQyParams !== null &&
      chgReducerPrice(priceInitQyParams, "initPriceChgd");
    priceLimitQyParams !== null &&
      chgReducerPrice(priceLimitQyParams, "limitPriceChgd");
  }, [priceInitQyParams, priceLimitQyParams]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Precio</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={filters.price.init || ""}
        onChange={(evt) => handleChange(evt, "init")}
      />
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={filters.price.limit || ""}
        onChange={(evt) => handleChange(evt, "limit")}
      />
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default PriceFilter;
