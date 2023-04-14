import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import { useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";

const PriceFilter = ({
  props: { updateQyParams, deleteQyParam, dispatch, filters, searchQyParams },
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
        : deleteQyParam(`price_${edge}`);
    }
  };
  const handleClean = () => {
    const edges = ["init", "limit"];
    for (let i = 0; i <= 1; i++) {
      deleteQyParam(`price_${edges[i]}`);
      chgReducerPrice("", edges[i]);
    }
  };
  useEffect(() => {
    searchQyParams.get("price_init") !== null &&
      chgReducerPrice(parseInt(searchQyParams.get("price_init")), "init");
    searchQyParams.get("price_limit") !== null &&
      chgReducerPrice(parseInt(searchQyParams.get("price_limit")), "limit");
  }, []);



  return (
    <div id="priceFilterOuter">
      <span>Precio</span>
      <div id="priceFilterInner">
        <TextField
          style={{"marginRight":"1rem"}}
          id="outlined-basic"
          label="Desde"
          variant="outlined"
          value={filters.price.init || ""}
          onChange={(evt) => handleChange(evt.target.value, "init")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label="Hasta"
          variant="outlined"
          value={filters.price.limit || ""}
          onChange={(evt) => handleChange(evt.target.value, "limit")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
      </div>
      <div className="filterSubmClean">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
