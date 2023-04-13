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
    <div id="locationFilter">
      <span>Ubicación</span>
      <TextField
        placeholder="Barrio, ciudad..."
        value={filters.location || ""}
        variant="outlined"
        onChange={handleChange}
      />
      <div className="filterSubmClean">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>Limpiar</button>
        
      </div>
    </div>
  );
};

export default LocationFilter;
