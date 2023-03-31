import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"

const SurfaceFilter = ({
  updateQyParams,
  deleteQyParam,
  dispatch,
  filters,
  coveredSurfaceInitQyParams,
  coveredSurfaceLimitQyParams,
  totalSurfaceInitQyParams,
  totalSurfaceLimitQyParams,
}) => {


  const handleSubmit = () => {
    filters.surface.covered.init
      ? updateQyParams("covered_surface_init", filters.surface.covered.init)
      : deleteQyParam("covered_surface_init");

    filters.surface.covered.limit
      ? updateQyParams("covered_surface_limit", filters.surface.covered.limit)
      : deleteQyParam("covered_surface_limit");

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
    deleteQyParam("covered_surface_init");
    deleteQyParam("covered_surface_limit");
    chgReducerSurface("", "coveredSurfaceChgd", "init");
    chgReducerSurface("", "coveredSurfaceChgd", "limit");
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
    surfaceType === "covered" &&
      chgReducerSurface(evt.target.value, "coveredSurfaceChgd", edge);
    surfaceType === "total" &&
      chgReducerSurface(evt.target.value, "totalSurfaceChgd", edge);
  };




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
      <span>Superficie cubierta</span>
      <TextField
        id="outlined-basic"
        label="Desde"
        variant="outlined"
        value={filters.surface.covered.init || ""}
        onChange={(evt) => handleChange(evt, "covered","init")}
      />
      <span>m2</span>
      <TextField
        id="outlined-basic"
        label="Hasta"
        variant="outlined"
        value={filters.surface.covered.limit || ""}
        onChange={(evt) => handleChange(evt, "covered", "limit")}
      />
      <span>m2</span>
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default SurfaceFilter;
