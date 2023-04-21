import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const TotalSurfaceFilter = ({ surfaceFilterValues, handleChange }) => {
  return (
    <div className="surfaceInput">
      <span>Superficie total:</span>
      <div>
        <TextField
          className="surfaceTextField"
          id="outlined-basic"
          label="Desde"
          variant="outlined"
          value={surfaceFilterValues.init || ""}
          onChange={(evt) => handleChange(evt.target.value, "total", "init")}
          InputProps={{
            endAdornment: <InputAdornment position="end">m2</InputAdornment>,
          }}
          sx={{width:"48%"}}
        />
        <TextField
          className="surfaceTextField"
          id="outlined-basic"
          label="Hasta"
          variant="outlined"
          value={surfaceFilterValues.limit || ""}
          onChange={(evt) => handleChange(evt.target.value, "total", "limit")}
          InputProps={{
            endAdornment: <InputAdornment position="end">m2</InputAdornment>,
          }}
          sx={{width:"48%", marginLeft:"4%"}}
        />
      </div>
    </div>
  );
};

export default TotalSurfaceFilter;
