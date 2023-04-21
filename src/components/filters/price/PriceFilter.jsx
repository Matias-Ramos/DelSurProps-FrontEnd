import TextField from "@mui/material/TextField";
import ConfirmBtn from "../../buttons/ConfirmBtn.jsx";
import InputAdornment from "@mui/material/InputAdornment";

const PriceFilter = ({
  props: { updateQyParams, deleteQyParam, dispatch, filters },
}) => {
  const chgReducerPrice = (newPrice, edge) =>
    dispatch({
      type: `priceChgd`,
      newPrice: newPrice,
      edge: edge,
    });
  const handleChange = (newValue, edge) => {
    const regex = /^[0-9\.]+$/;
    if (newValue === "" || regex.test(newValue)) {
      const cleanNumber = parseInt(
        newValue.replace(".", "").replace(".", "").replace(".", "")
      );
      chgReducerPrice(cleanNumber, edge);
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


  function improvePriceReadability(value) {
    value = value
      .toLocaleString()
      .replace(",", ".")
      .replace(",", ".")
      .replace(",", ".");
    return value;
  }

  return (
    <div id="priceFilterOuter">
      <div id="priceFilterInner">
        <TextField
          style={{ marginRight: "1rem" }}
          id="outlined-basic"
          label="Desde"
          variant="outlined"
          value={
            filters.price.init
              ? improvePriceReadability(filters.price.init)
              : ""
          }
          onChange={(evt) => handleChange(evt.target.value, "init")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Hasta"
          variant="outlined"
          value={
            filters.price.limit
              ? improvePriceReadability(filters.price.limit)
              : ""
          }
          onChange={(evt) => handleChange(evt.target.value, "limit")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
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
