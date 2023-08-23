// Components
import { TextField, InputAdornment } from "@mui/material";
// Typechecking
import PropTypes from "prop-types";

const customWhite = "#cccccc";
const customGrey = "#7f7f7f";
const SurfaceFilter = ({
  surfaceTypeInSpanish,
  surfaceType,
  surfaceFilterValues,
  handleChange,
}) => (
  <div className="surfaceInput">
    <span>Superficie {surfaceTypeInSpanish}:</span>
    <div>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt.target.value, surfaceType, "init")}
        sx={{ width: "48%", input: { color: customWhite } }}
        InputLabelProps={{
          style: { color: customGrey },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                "& .MuiTypography-root": {
                  color: customWhite,
                },
              }}
            >
              m2
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={surfaceFilterValues.limit || ""}
        onChange={(evt) => handleChange(evt.target.value, surfaceType, "limit")}
        sx={{ width: "48%", marginLeft: "4%", input: { color: customWhite } }}
        InputLabelProps={{
          style: { color: customGrey },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                "& .MuiTypography-root": {
                  color: customWhite,
                },
              }}
            >
              m2
            </InputAdornment>
          ),
        }}
      />
    </div>
  </div>
);

/****************************** */
// TypeChecking
SurfaceFilter.propTypes = {
  surfaceTypeInSpanish: PropTypes.string,
  surfaceType: PropTypes.string,
  surfaceFilterValues: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
  ),
  handleChange: PropTypes.func,
};
/****************************** */

export default SurfaceFilter;
