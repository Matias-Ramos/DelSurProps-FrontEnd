import TextField from '@mui/material/TextField';
import ConfirmBtn from "../ConfirmBtn.jsx"

const SurfaceFilter = ({updateQyParams}) => {
  return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
      <span>Superficie total</span>
      <TextField id="outlined-basic" label="Desde" variant="outlined" />
      <span>m2</span>
      <TextField id="outlined-basic" label="Hasta" variant="outlined" />
      <span>m2</span>
      <br />
      <span>Superficie cubierta</span>
      <TextField id="outlined-basic" label="Desde" variant="outlined" />
      <span>m2</span>
      <TextField id="outlined-basic" label="Hasta" variant="outlined" />
      <span>m2</span>
      <ConfirmBtn/>
    </div>
  );
};

export default SurfaceFilter;
