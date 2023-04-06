import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SliderMui from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 35px;
`;

export default function Slider({
  props: {
    handleChange,
    room,
    reducerVarName,
    roomFilter,
  },
}) {

  const valuetext = (value) => `${value} ${room}`; // slider accessibility
  const handleBlur = () => {
    if (roomFilter.init < 0) {
      handleChange(1, reducerVarName, "init");
    } else if (roomFilter.limit > 7) {
      handleChange(7, reducerVarName, "limit");
    }
  };
  // both handleChgs disable the swap between min and max value, and updates the reducer values.
  const handleChgSlider = (sliderCurrValues, sliderHandle) => {
    // sliderHandle===0 ? left one : right one
    const newValue = [];
    sliderHandle === 0
      ? newValue.push(
          Math.min(sliderCurrValues[0], parseInt(roomFilter.limit)),
          parseInt(roomFilter.limit)
        )
      : newValue.push(
          parseInt(roomFilter.init),
          Math.max(sliderCurrValues[1], parseInt(roomFilter.init))
        );
    handleChange(newValue, reducerVarName);
  };
  const handleChgInput = (event, edge) => {
    const newValue = [];
    edge === "init"
      ? // left input was used
        newValue.push(
          Math.min(parseInt(event.target.value), parseInt(roomFilter.limit)),
          parseInt(roomFilter.limit)
        )
      : // right input was used
        newValue.push(
          parseInt(roomFilter.init),
          Math.max(parseInt(event.target.value), parseInt(roomFilter.init))
        );
    handleChange(newValue, reducerVarName);
  };

  return (
    <>
      <Box sx={{ width: 400 }}>
        <Typography id="input-slider" gutterBottom>
          {room}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <span>Min:{"  "}</span>
            <Input
              value={parseInt(roomFilter.init)}
              size="small"
              onChange={(event) => handleChgInput(event, "init")}
              onBlur={handleBlur}
              sx={{ input: { cursor: "default" } }}
              id={`${room}_input_left`} // accessibility purposes
              inputProps={{
                step: 1,
                min: 1,
                max: 7,
                //prevents the use from changing the value through its keyboard
                onKeyDown: (event) => {
                  event.code === "ArrowUp" || event.code === "ArrowDown"
                    ? handleChgInput(event, "init")
                    : event.preventDefault();
                },
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
          <Grid item xs>
            <SliderMui
              getAriaLabel={() => `Rango de ${room}`}
              value={[parseInt(roomFilter.init), parseInt(roomFilter.limit)]}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              onChange={( _event, newValue, activeThumb) =>
                handleChgSlider( newValue, activeThumb)
              }
              step={1}
              marks
              min={1}
              max={7}
              disableSwap
            />
          </Grid>
          <Grid item>
            <span>Max:{"  "}</span>
            <Input
              value={parseInt(roomFilter.limit)}
              size="small"
              onChange={(event) => handleChgInput(event, "limit")}
              onBlur={handleBlur}
              sx={{ input: { cursor: "default" } }}
              id={`${room}_input_right`} // accessibility purposes
              inputProps={{
                step: 1,
                min: 1,
                max: 7,
                //prevents the use from changing the value through its keyboard
                onKeyDown: (event) => {
                  event.code === "ArrowUp" || event.code === "ArrowDown"
                    ? handleChgInput(event, "limit")
                    : event.preventDefault();
                },
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
