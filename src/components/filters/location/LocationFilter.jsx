import TextField from "@mui/material/TextField";
import ConfirmBtn from "../../buttons/ConfirmBtn.jsx";
const LocationFilter = ({
  props:{
    updateQyParams,
    deleteQyParam,
    dispatch,
    filters,
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


  return (
    <div id="locationFilter" >
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
