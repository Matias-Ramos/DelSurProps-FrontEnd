// Components
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// Typechecking
import PropTypes from "prop-types";

const PriceFilter = ({
  priceFilter,
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
    value={priceFilter[edge] ? improvePriceReadability(priceFilter[edge]) : ""}
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

/****************************** */
// TypeChecking
PriceFilter.propTypes = {
  priceFilter: PropTypes.shape({
    init: PropTypes.oneOfType(
      [PropTypes.number, PropTypes.oneOf([""])]
    ),
    limit: PropTypes.oneOfType(
      [PropTypes.number, PropTypes.oneOf([""])]
    ),
  }),
  handleChange: PropTypes.func,
  improvePriceReadability: PropTypes.func,
  sxObj: PropTypes.object,
  edgeLabel: PropTypes.string,
  edge: PropTypes.string,
};
/****************************** */

export default PriceFilter;
