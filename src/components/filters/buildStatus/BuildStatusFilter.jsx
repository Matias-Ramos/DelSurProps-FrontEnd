import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import ConfirmBtn from '../ConfirmBtn';

export default function BuidlStatusFilter() {
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography id="input-slider" gutterBottom>
        Etapa constructiva
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"pozo"}>Pozo</MenuItem>
          <MenuItem value={"en-construccion"}>En construcción</MenuItem>
          <MenuItem value={"pre-venta"}>Pre-venta</MenuItem>
        </Select>
      </FormControl>
      <ConfirmBtn/>
    </Box>
  );
}