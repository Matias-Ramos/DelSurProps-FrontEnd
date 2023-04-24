import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import ConfirmBtn from "./ConfirmBtn.jsx"; // not using default ConfitmBtn.jsx as the other components

export default function BuildStatusFilter({
  props:{
    updateQyParams,
    dispatch,
    filters,
  }
}) {

  /****************************** */
  // Functions 

  const chgReducerBuildingSt = (status, isChecked) =>
    dispatch({
      type: "buildingStatusChgd",
      status:status,
      isChecked: isChecked,
    });
  const handleChange = (status, isChecked) => {
    chgReducerBuildingSt(status, isChecked);
  }
  const handleSubmit = () => {
    const query = Object.keys(filters.buildingStatus)
      .filter((key) => filters.buildingStatus[key]) // filters boolean true statuses
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
          control={<Checkbox checked={filters.buildingStatus.pozo} />}
          onChange={(evt) => handleChange("pozo", evt.target.checked)}
          label="En pozo"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.buildingStatus.in_progress} />}
          onChange={(evt) => handleChange("in_progress", evt.target.checked)}
          label="En construcción"
        />
        <FormControlLabel
          control={<Checkbox checked={filters.buildingStatus.pre_sale} />}
          onChange={(evt) => handleChange("pre_sale", evt.target.checked)}
          label="Pre-venta"
        />
      </FormGroup>
      <ConfirmBtn handleSubmit={handleSubmit} filters={filters.buildingStatus}/>
    </div>
  );
}
