import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"

const CoveredSurfaceFilter = ({
  surfaceFilterValues,
  handleSubmit,
  handleClean,
  handleChange,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Superficie cubierta</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt.target.value, "covered","init")}
      />
      <span>m2</span>
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={surfaceFilterValues.limit || ""}
        onChange={(evt) => handleChange(evt.target.value, "covered", "limit")}
      />
      <span>m2</span>
      <ConfirmBtn handleSubmit={()=>handleSubmit("covered")} />
      <span onClick={()=>handleClean("covered")}>Limpiar</span>
    </div>
  );
};

export default CoveredSurfaceFilter;
