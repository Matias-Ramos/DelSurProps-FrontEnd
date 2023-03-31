import { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import ConfirmBtn from '../ConfirmBtn';

export default function BuildStatusFilter({
  updateQyParams,
  deleteQyParam,
  dispatch,
  filters,
  totalSurfaceQyParams,
  coveredSurfaceQyParams,
}) {
  const chgReducerSurface = (newSurface, dispatchType) =>
    dispatch({
      type: dispatchType,
      newSurface: newSurface,
    });
  const handleChange = (evt, surfaceType) => {
    surfaceType === "covered" &&
      chgReducerSurface(evt.target.value, "cvrdSurfaceChgd");
    surfaceType === "total" &&
      chgReducerSurface(evt.target.value, "ttlSurfaceChgd");
  };
  const handleSubmit = () => {
    filters.surface.covered
      ? updateQyParams("covered_surface", filters.surface.covered)
      : deleteQyParam("covered_surface");

    filters.surface.total
      ? updateQyParams("total_surface", filters.surface.total)
      : deleteQyParam("total_surface");
  };
  const handleClean = () => {
    deleteQyParam("total_surface");
    deleteQyParam("covered_surface");
    chgReducerSurface("", "total_surface");
    chgReducerSurface("", "covered_surface");
  };

  useEffect(() => {
    totalSurfaceQyParams !== null &&
      chgReducerSurface(totalSurfaceQyParams, "ttlSurfaceChgd");
    coveredSurfaceQyParams !== null &&
      chgReducerSurface(coveredSurfaceQyParams, "cvrdSurfaceChgd");
  }, [totalSurfaceQyParams, coveredSurfaceQyParams]);

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
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"pozo"}>Pozo</MenuItem>
          <MenuItem value={"en-construccion"}>En construcción</MenuItem>
          <MenuItem value={"pre-venta"}>Pre-venta</MenuItem>
        </Select>
      </FormControl>
      <ConfirmBtn />
    </Box>
  );
}