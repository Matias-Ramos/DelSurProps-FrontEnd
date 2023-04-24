import { TextField, InputAdornment } from "@mui/material";
const customWhite="#cccccc"
const customGrey="#7f7f7f"
const SurfaceFilter = ({
  surfaceTypeEsp,
  surfaceType,
  surfaceFilterValues,
  handleChange,
}) => (
  <div className="surfaceInput">
    <span>Superficie {surfaceTypeEsp}:</span>
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

export default SurfaceFilter;
