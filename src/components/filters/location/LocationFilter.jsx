import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import { useEffect } from "react";

const LocationFilter = ({ updateQyParams, deleteQyParams, dispatch, filters, locationQyParams }) => {
  const chgReducerLocation = (newLocation) =>
    dispatch({
      type: "locationChgd",
      location: newLocation,
    });
  const handleChange = (evt) => chgReducerLocation(evt.target.value);
  const handleSubmit = () => filters.location ? updateQyParams("location", filters.location): deleteQyParams();
  const handleClean = () => {
    deleteQyParams();
    chgReducerLocation('')
  }
  useEffect(() => {
    locationQyParams !== null && chgReducerLocation(locationQyParams);
  }, [locationQyParams])
  
  
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="Ubicación"
        value = {filters.location || ""}
        variant="outlined"
        onChange={handleChange}
      />
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default LocationFilter;
