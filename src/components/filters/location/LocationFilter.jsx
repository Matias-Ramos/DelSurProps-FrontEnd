// Components
import TextField from "@mui/material/TextField";
import ConfirmBtn from "../../filters/buttons/ConfirmBtn.jsx";
// Typechecking
import PropTypes from 'prop-types';

const LocationFilter = ({
  filterModifiers: { updateQyParams, deleteQyParam, dispatch },
  locationFilter
}) => {


  /****************************** */
  // Functions

  const chgReducerLocation = (newLocation) =>
    dispatch({
      type: "locationChgd",
      location: newLocation,
    });
  
  const handleChange = (evt) => chgReducerLocation(evt.target.value);
  const handleSubmit = () =>
    locationFilter
      ? updateQyParams("location", locationFilter)
      : deleteQyParam("location");
  const handleClean = () => {
    deleteQyParam("location");
    chgReducerLocation("");
  };

  /****************************** */
  // Rendering

  return (
    <div id="locationFilter">
      <TextField
        placeholder="Barrio, ciudad..."
        value={locationFilter || ""}
        variant="outlined"
        onChange={handleChange}
        sx={{
          input: { color: "#cccccc", "&::placeholder": { color: "#bbbbbb" } },
        }}
      />
      <div className="btnsSubmitClean-Container">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

/****************************** */
// TypeChecking
LocationFilter.propTypes = {
  filterModifiers: PropTypes.shape({
    updateQyParams: PropTypes.func,
    deleteQyParam: PropTypes.func,
    dispatch: PropTypes.func,
    }),
  locationFilter: PropTypes.string,
}
/****************************** */

export default LocationFilter;
