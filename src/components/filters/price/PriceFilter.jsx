import TextField from "@mui/material/TextField";

const PriceFilter = () => {
  return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
      <span>Precio</span>
      <TextField id="outlined-basic" label="Desde" variant="outlined" />
      <TextField id="outlined-basic" label="Hasta" variant="outlined" />
    </div>
  );
};

export default PriceFilter;
