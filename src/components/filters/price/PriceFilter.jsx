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
  const chgReducerPrice = (newPrice, edge) =>
    dispatch({
      type: `priceChgd`,
      newPrice: newPrice,
      edge: edge,
    });
  const handleChange = (newValue, edge) => {
    const regex = /^[0-9\b]+$/;
    if (newValue === "" || regex.test(newValue)) {
      chgReducerPrice(newValue, edge);
    }
  };
  const handleSubmit = () => {
    for (const edge in filters.price) {
      filters.price[edge] 
       ? updateQyParams(`price_${edge}`, filters.price[edge])
       : deleteQyParam(`price_${edge}`)
    }
  };
  const handleClean = () => {
    const edges = ["init", "limit"]
    for(let i=0; i<=1; i++){
      deleteQyParam(`price_${edges[i]}`);
      chgReducerPrice("", edges[i]);
    }
  };
  useEffect(() => {
    priceInitQyParams !== null && chgReducerPrice(parseInt(priceInitQyParams), "init");
    priceLimitQyParams !== null && chgReducerPrice(parseInt(priceLimitQyParams), "limit");
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Precio</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={filters.price.init || ""}
        onChange={(evt) => handleChange(evt.target.value, "init")}
      />      
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={filters.price.limit || ""}
        onChange={(evt) => handleChange(evt.target.value, "limit")}
      />
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default PriceFilter;
