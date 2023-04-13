import { useEffect } from "react";
import ConfirmBtn from "../ConfirmBtn";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BuildStatusFilter({
  props:{
    updateQyParams,
    dispatch,
    filters,
    searchQyParams,
  }
}) {
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

  
  useEffect(() => {
    if(searchQyParams.get("building_status") !== null){
      const preFilteredStatuses = searchQyParams.get("building_status").split('-or-');
      const allStatuses = Object.keys(filters.buildingStatus);
      const nonChosenstatuses = allStatuses.filter(function(obj) { return preFilteredStatuses.indexOf(obj) == -1; });
      for(let status of nonChosenstatuses){
        chgReducerBuildingSt(status, false);
      }
    }
  }, []);

  return (
    <>
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
      <ConfirmBtn handleSubmit={handleSubmit} />
    </>
  );
}
