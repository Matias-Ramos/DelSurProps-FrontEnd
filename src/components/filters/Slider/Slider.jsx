import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SliderMui from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 35px;
`;

export default function Slider({room}) {
  const [value, setValue] = React.useState([1, 7]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, pos) => {
    setValue((state) => {
      let array = [...state];
      array[pos] = event.target.value === "" ? "" : Number(event.target.value);
      return array;
    });
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(1);
    } else if (value > 7) {
      setValue(7);
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <Typography id="input-slider" gutterBottom>
        {room}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <span>Min:{"  "}</span>
          <Input
            value={value[0]}
            size="small"
            onChange={(event) => handleInputChange(event, 0)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 7,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs>
          <SliderMui
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={1}
            max={7}
            marks
          />
        </Grid>
        <Grid item>
          <span>Max:{"  "}</span>
          <Input
            value={value[1]}
            size="small"
            onChange={(event) => handleInputChange(event, 1)}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 7,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
