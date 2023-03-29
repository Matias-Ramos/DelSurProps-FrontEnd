import TextField from "@mui/material/TextField";
import ConfirmBtn from "../ConfirmBtn.jsx";
import { useState } from "react";
// import { queryCtxt } from '../../../context/QyParamsCtxt.jsx';
const LocationFilter = ({ updateQyParams }) => {
  const [location, setLocation] = useState("");
  const handleChange = (evt) => setLocation(evt.target.value);
  const handleSubmit = () => location && updateQyParams("location", location) 
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="Ubicación"
        variant="outlined"
        onChange={handleChange}
      />
      <ConfirmBtn handleSubmit={handleSubmit} />
    </div>
  );
};

export default LocationFilter;
