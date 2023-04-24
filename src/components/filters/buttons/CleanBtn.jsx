// Hooks
import { useContext } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
// Component
import Button from "@mui/material/Button";
// Icon
import Broom from "../../../assets/icons/broom-solid.svg";

const CleanBtn = ({ dispatch }) => {
  const { deleteQyParams } = useContext(queryCtxt);
  const clearFilters = () => {
    dispatch({
      type: "filtersResetted",
    });
    deleteQyParams();
  };
  return (
    <Button variant="text" id="cleanAllFiltersBtn" onClick={clearFilters}>
      <img src={Broom} alt="ícono de escoba" />
      Limpiar filtros
    </Button>
  );
};

export default CleanBtn;
