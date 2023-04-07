import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import { useEffect } from "react";

const LocationFilter = ({
  props:{
    updateQyParams,
    deleteQyParam,
    dispatch,
    filters,
    searchQyParams,
  }
}) => {
  const chgReducerLocation = (newLocation) =>
    dispatch({
      type: "locationChgd",
      location: newLocation,
    });
  const handleChange = (evt) => chgReducerLocation(evt.target.value);
  const handleSubmit = () =>
    filters.location
      ? updateQyParams("location", filters.location)
      : deleteQyParam("location");
  const handleClean = () => {
    deleteQyParam("location");
    chgReducerLocation("");
  };
  useEffect(() => {
    searchQyParams.get("location") !== null && chgReducerLocation(searchQyParams.get("location"));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Ubicación</span>
      <TextField
        label="barrio, ciudad..."
        value={filters.location || ""}
        variant="outlined"
        onChange={handleChange}
      />
      <ConfirmBtn handleSubmit={handleSubmit} />
      <span onClick={handleClean}>Limpiar</span>
    </div>
  );
};

export default LocationFilter;
