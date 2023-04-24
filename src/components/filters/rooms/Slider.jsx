import { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Slider as SliderMui,
  Input as MuiInput,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material";

export default function Slider({
  props: { handleChange, room, reducerVarName, roomFilter, btsBreakpoints },
}) {
  /****************************** */
  // Functions & variables 

  const theme = createTheme(btsBreakpoints); // setting mui w/ same breakpoints as bts
  const windowWidth = useRef(window.innerWidth);
  const Input = styled(MuiInput)`width: 30px;`;
  const valuetext = (value) => `${value} ${room}`; // slider accessibility
  const handleBlur = () => {
    if (roomFilter.init < 0) {
      handleChange(1, reducerVarName, "init");
    } else if (roomFilter.limit > 7) {
      handleChange(7, reducerVarName, "limit");
    }
  };
  /* both handleChgs disable the swap between min and max value
  and updates the reducer values.*/
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

  /****************************** */
  // Rendering 

  return (
    <div className="sliderContainer">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Typography
            id="input-slider"
            gutterBottom
            sx={{
              textAlign: "center",
              marginBottom: "2rem"
            }}
          >
            {room}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <span className="minMaxSpan">Min:{"  "}</span>
              <Input
                sx={{color:"#cccccc"}}
                value={parseInt(roomFilter.init)}
                size="small"
                onChange={(event) => handleChgInput(event, "init")}
                onBlur={handleBlur}
                id={`${room}_input_left`} // accessibility purposes
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 7,
                  //prevents the user from changing the value through its keyboard, except if using ArrowUp/ArrowDown
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
                valueLabelDisplay={windowWidth.current >= 768 ? "auto" : "on"}
                onChange={(_event, newValue, activeThumb) =>
                  handleChgSlider(newValue, activeThumb)
                }
                step={1}
                marks
                min={1}
                max={7}
                disableSwap
              />
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <span className="minMaxSpan">Max:{"  "}</span>
              <Input
                sx={{color:"#cccccc"}}
                value={parseInt(roomFilter.limit)}
                size="small"
                onChange={(event) => handleChgInput(event, "limit")}
                onBlur={handleBlur}
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
      </ThemeProvider>
    </div>
  );
}
