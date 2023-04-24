import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const PriceFilter = ({
  filters,
  handleChange,
  improvePriceReadability,
  sxObj,
  edgeLabel,
  edge,
}) => (
  <TextField
    sx={sxObj}
    InputLabelProps={{
      style: { color: "#cccccc" },
    }}
    id="outlined-basic"
    label={edgeLabel}
    variant="outlined"
    value={
      filters.price[edge] ? improvePriceReadability(filters.price[edge]) : ""
    }
    onChange={(evt) => handleChange(evt.target.value, edge)}
    InputProps={{
      startAdornment: (
        <InputAdornment
          position="start"
          sx={{
            "& .MuiTypography-root": {
              color: "#cccccc",
            },
          }}
        >
          $
        </InputAdornment>
      ),
    }}
  />
);

export default PriceFilter;
