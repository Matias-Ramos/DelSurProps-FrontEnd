import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx"

const PriceFilter = ({updateQyParams}) => {
  return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
      <span>Precio</span>
      <TextField id="outlined-basic" label="Desde" variant="outlined" />
      <TextField id="outlined-basic" label="Hasta" variant="outlined" />
      <ConfirmBtn/>
    </div>
  );
};

export default PriceFilter;
