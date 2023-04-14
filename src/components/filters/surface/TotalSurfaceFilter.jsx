import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const TotalSurfaceFilter = ({ surfaceFilterValues, handleChange }) => {
  return (
    <div className="surfaceInput">
      <span>Superficie total</span>
      <TextField
        className="surfaceTopTextField"
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt.target.value, "total", "init")}
        InputProps={{
          endAdornment: <InputAdornment position="end">m2</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={surfaceFilterValues.limit || ""}
        onChange={(evt) => handleChange(evt.target.value, "total", "limit")}
        InputProps={{
          endAdornment: <InputAdornment position="end">m2</InputAdornment>,
        }}
      />
    </div>
  );
};

export default TotalSurfaceFilter;
