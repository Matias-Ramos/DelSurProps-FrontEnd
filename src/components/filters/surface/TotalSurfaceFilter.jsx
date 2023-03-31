import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"
import { useEffect } from 'react';

const TotalSurfaceFilter = ({
  surfaceFilterValues,
  handleSubmit,
  handleClean,
  handleChange,
  chgReducerSurface,
  totalSurfaceInitQyParams,
  totalSurfaceLimitQyParams,
}) => {

  useEffect(() => {
    totalSurfaceInitQyParams !== null && chgReducerSurface(totalSurfaceInitQyParams,"totalSurfaceChgd","init")
    totalSurfaceLimitQyParams !== null && chgReducerSurface(totalSurfaceLimitQyParams,"totalSurfaceChgd","limit")
  }, [ totalSurfaceInitQyParams, totalSurfaceLimitQyParams ]);


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Superficie total</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt, "total", "init")}
      />
      <span>m2</span>
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={surfaceFilterValues.limit || ""}
        onChange={(evt) => handleChange(evt,  "total", "limit")}
      />
      <span>m2</span>
      <br />

      <ConfirmBtn handleSubmit={()=>handleSubmit("total")} />
      <span onClick={()=>handleClean("total")}>Limpiar</span>
    </div>
  );
};

export default TotalSurfaceFilter;
