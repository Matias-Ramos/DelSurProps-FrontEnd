import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"
import { useEffect } from 'react';

const CoveredSurfaceFilter = ({
  surfaceFilterValues,
  handleSubmit,
  handleClean,
  handleChange,
  chgReducerSurface,
  coveredSurfaceInitQyParams,
  coveredSurfaceLimitQyParams,
}) => {

  useEffect(() => {
    coveredSurfaceInitQyParams !== null && chgReducerSurface(coveredSurfaceInitQyParams,"coveredSurfaceChgd","init")
    coveredSurfaceLimitQyParams!== null && chgReducerSurface(coveredSurfaceLimitQyParams,"coveredSurfaceChgd","limit")
  }, [coveredSurfaceInitQyParams, coveredSurfaceLimitQyParams ]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Superficie cubierta</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={surfaceFilterValues.init || ""}
        onChange={(evt) => handleChange(evt, "covered","init")}
      />
      <span>m2</span>
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={surfaceFilterValues.limit || ""}
        onChange={(evt) => handleChange(evt, "covered", "limit")}
      />
      <span>m2</span>
      <ConfirmBtn handleSubmit={()=>handleSubmit("covered")} />
      <span onClick={()=>handleClean("covered")}>Limpiar</span>
    </div>
  );
};

export default CoveredSurfaceFilter;
