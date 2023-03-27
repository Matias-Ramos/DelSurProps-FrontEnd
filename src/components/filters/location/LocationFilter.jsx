import TextField from '@mui/material/TextField';
const LocationFilter = () => {
  return (
    <div style={{"display":"flex", "flexDirection":"column"}}>
    <span>Ubicación</span>
    <TextField id="outlined-basic" label="Ubicación" variant="outlined" />
    </div>
    
  )
}

export default LocationFilter