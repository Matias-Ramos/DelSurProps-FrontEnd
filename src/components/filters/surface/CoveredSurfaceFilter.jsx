import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import InputAdornment from "@mui/material/InputAdornment";

const CoveredSurfaceFilter = ({
  surfaceFilterValues,
  handleSubmit,
  handleClean,
  handleChange,
}) => {
  return (
    <div className="surfaceInput" style={{ display: "flex", flexDirection: "column" }}>
      <span>Superficie cubierta</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt.target.value, "covered", "init")}
        InputProps={{
          endAdornment: <InputAdornment position="end">m2</InputAdornment>,
        }}
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
      />
      <div className="filterSubmClean">
        <ConfirmBtn handleSubmit={() => handleSubmit("covered")} />
        <button className="cleanBtn" onClick={() => handleClean("covered")}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default CoveredSurfaceFilter;
