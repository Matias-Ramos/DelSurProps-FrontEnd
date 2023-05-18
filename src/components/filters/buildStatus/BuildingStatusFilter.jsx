// Components
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import ConfirmBtn from "./ConfirmBtn.jsx"; // not using default ConfitmBtn.jsx as the other components
// Typechecking
import PropTypes from "prop-types";

const BuildingStatusFilter = ({
  filterModifiers: { updateQyParams, dispatch },
  buildingStatusFilter,
}) => {
  /****************************** */
  // Functions

  const chgReducerBuildingSt = (status, isChecked) =>
    dispatch({
      type: "buildingStatusChgd",
      status: status,
      isChecked: isChecked,
    });
  const handleChange = (status, isChecked) => {
    chgReducerBuildingSt(status, isChecked);
  };
  const handleSubmit = () => {
    const query = Object.keys(buildingStatusFilter)
      .filter((key) => buildingStatusFilter[key]) // filters boolean true statuses
      .join("-or-");
    updateQyParams("building_status", query);
  };

  /****************************** */
  // Rendering

  return (
    <div id="buildStatusContainer">
      <span>Etapa constructiva:</span>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={buildingStatusFilter.pozo} />}
          onChange={(evt) => handleChange("pozo", evt.target.checked)}
          label="En pozo"
        />
        <FormControlLabel
          control={<Checkbox checked={buildingStatusFilter.in_progress} />}
          onChange={(evt) => handleChange("in_progress", evt.target.checked)}
          label="En construcción"
        />
        <FormControlLabel
          control={<Checkbox checked={buildingStatusFilter.pre_sale} />}
          onChange={(evt) => handleChange("pre_sale", evt.target.checked)}
          label="Pre-venta"
        />
      </FormGroup>
      <ConfirmBtn
        handleSubmit={handleSubmit}
        buildingStatusFilter={buildingStatusFilter}
      />
    </div>
  );
};

/****************************** */
// TypeChecking
BuildingStatusFilter.propTypes = {
  filterModifiers: PropTypes.shape({
    updateQyParams: PropTypes.func,
    deleteQyParams: PropTypes.func,
    dispatch: PropTypes.func,
  }),
  buildingStatusFilter: PropTypes.shape({
    in_progress: PropTypes.bool,
    pre_sale: PropTypes.bool,
    pozo: PropTypes.bool,
  }),
};
/****************************** */

export default BuildingStatusFilter;
