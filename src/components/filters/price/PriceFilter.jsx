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
    chgReducerPrice(evt.target.value, `${edge}PriceChgd`);
  };
  const handleSubmit = () => {
    for (const edge in filters.price) {
      filters.price[edge] 
       ? updateQyParams(`price_${edge}`, filters.price[edge])
       : deleteQyParam(`price_${edge}`)
    }
  };
  const handleClean = () => {
    const edge = ['init', 'limit'];
    for(let i=0; i<=1; i++){
      deleteQyParam(`price_${edge[i]}`);
      chgReducerPrice("", `${edge[i]}PriceChgd`);
    }
  };

  useEffect(() => {
    priceInitQyParams !== null && chgReducerPrice(priceInitQyParams, "initPriceChgd");
    priceLimitQyParams !== null && chgReducerPrice(priceLimitQyParams, "limitPriceChgd");
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
