import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import ConfirmBtn from "../ConfirmBtn";

export default function BuildStatusFilter({
  props:{
    updateQyParams,
    deleteQyParam,
    dispatch,
    filters,
    searchQyParams,
  }
}) {
  const chgReducerBuildingSt = (newStatus) =>
    dispatch({
      type: "buildingStatusChgd",
      newStatus: newStatus,
    });
  const handleChange = (newStatus) => chgReducerBuildingSt(newStatus);
  const handleSubmit = () =>
    filters.buildingStatus &&
    updateQyParams("building_status", filters.buildingStatus);

  const handleClean = () => {
    deleteQyParam("building_status");
    chgReducerBuildingSt("");
  };
  useEffect(() => {
    searchQyParams.get("building_status") !== null && chgReducerBuildingSt(searchQyParams.get("building_status"));
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography id="input-slider" gutterBottom>
        Etapa constructiva
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filters.buildingStatus || ""}
          label="Estado del emprendimiento"
          onChange={(evt)=>handleChange(evt.target.value)}
        >
          <MenuItem value={"pozo"}>Pozo</MenuItem>
          <MenuItem value={"en-construccion"}>En construcción</MenuItem>
          <MenuItem value={"pre-venta"}>Pre-venta</MenuItem>
        </Select>
      </FormControl>
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </Box>
  );
}
