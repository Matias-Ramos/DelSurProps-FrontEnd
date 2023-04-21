import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const CoveredSurfaceFilter = ({
  surfaceFilterValues,
  handleChange,
}) => {
  return (
    <div className="surfaceInput">
      <span>Superficie cubierta:</span>
      <div>
        <TextField
          id="outlined-basic"
          label="Desde"
          variant="outlined"
          value={surfaceFilterValues.init || ""}
          onChange={(evt) => handleChange(evt.target.value, "covered", "init")}
          InputProps={{
            endAdornment: <InputAdornment position="end">m2</InputAdornment>,
          }}
          sx={{width:"48%"}}
        />
        <TextField
          id="outlined-basic"
          label="Hasta"
          variant="outlined"
          value={surfaceFilterValues.limit || ""}
          onChange={(evt) => handleChange(evt.target.value, "covered", "limit")}
          InputProps={{
            endAdornment: <InputAdornment position="end">m2</InputAdornment>,
          }}
          sx={{width:"48%", marginLeft:"4%"}}
        />
      </div>
    </div>
  );
};

export default CoveredSurfaceFilter;
