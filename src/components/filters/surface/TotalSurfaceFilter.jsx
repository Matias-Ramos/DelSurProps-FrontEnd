import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"
import { useEffect } from 'react';

const TotalSurfaceFilter = ({
  updateQyParams,
  deleteQyParam,
  dispatch,
  filters,
  totalSurfaceInitQyParams,
  totalSurfaceLimitQyParams,
}) => {


  const handleSubmit = () => {
    filters.surface.total.init
      ? updateQyParams("total_surface_init", filters.surface.total.init)
      : deleteQyParam("total_surface_init");

    filters.surface.total.limit
      ? updateQyParams("total_surface_limit", filters.surface.total.limit)
      : deleteQyParam("total_surface_limit");
  };
  const handleClean = () => {
    deleteQyParam("total_surface_init");
    deleteQyParam("total_surface_limit");
    chgReducerSurface("", "totalSurfaceChgd", "init");
    chgReducerSurface("", "totalSurfaceChgd", "limit");
  };

  const chgReducerSurface = (newSurface, dispatchEvt, edge) =>
    dispatch({
      newSurface: newSurface,
      type: dispatchEvt,
      edge: edge,
    });

  const handleChange = (evt, surfaceType, edge) => {
    surfaceType === "total" &&
      chgReducerSurface(evt.target.value, "totalSurfaceChgd", edge);
  };

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
        value={filters.surface.total.init || ""}
        onChange={(evt) => handleChange(evt, "total", "init")}
      />
      <span>m2</span>
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={filters.surface.total.limit || ""}
        onChange={(evt) => handleChange(evt,  "total", "limit")}
      />
      <span>m2</span>
      <br />

      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default TotalSurfaceFilter;
