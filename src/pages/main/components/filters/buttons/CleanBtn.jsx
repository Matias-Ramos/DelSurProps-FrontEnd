// Hooks
import { useContext } from "react";
import { queryCtxt } from "../../../../../context/QyParamsCtxt.jsx";
// Component
import Button from "@mui/material/Button";
// Icon
import Broom from "../../../../../assets/icons/broom-solid.svg";
// Typechecking
import PropTypes from "prop-types"

const CleanBtn = ({ dispatch }) => {

  /****************************** */
  // Functions

  const { deleteQyParams } = useContext(queryCtxt);
  const clearFilters = () => {
    dispatch({
      type: "filtersResetted",
    });
    deleteQyParams();
  };

  /****************************** */
  // Rendering
  return (
    <Button variant="text" id="cleanAllFiltersBtn" onClick={clearFilters}>
      <img src={Broom} alt="ícono de escoba" />
      Limpiar filtros
    </Button>
  );
};

/****************************** */
// TypeChecking
CleanBtn.propTypes = {
  dispatch: PropTypes.func,
}
/****************************** */


export default CleanBtn;
