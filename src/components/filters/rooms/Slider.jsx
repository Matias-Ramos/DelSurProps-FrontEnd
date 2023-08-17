// Hook
import { useRef } from "react";
// Typechecking
import PropTypes from "prop-types";
// Components
import {
  Box,
  Grid,
  Typography,
  Slider as SliderMui,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const Slider = ({
  props: { handleChange, room, reducerVarName, roomFilter, btsBreakpoints },
}) => {
  /****************************** */
  // Functions & variables

  const theme = createTheme(btsBreakpoints); // setting mui w/ same breakpoints as bts
  const windowWidth = useRef(window.innerWidth);

  const valuetext = (value) => `${value} ${room}`; // slider accessibility
  const handleLimits = () => {
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
    const newEdges = [];
    edge === "init"
      ? // left input was used
        newEdges.push(
          Math.min(parseInt(event.target.value), parseInt(roomFilter.limit)),
          parseInt(roomFilter.limit)
        )
      : // right input was used
        newEdges.push(
          parseInt(roomFilter.init),
          Math.max(parseInt(event.target.value), parseInt(roomFilter.init))
        );
    handleChange(newEdges, reducerVarName);
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
              marginBottom: "2rem",
            }}
          >
            {room}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <span className="minMaxSpan">Min:{"  "}</span>
              <TextField
                sx={{
                  color: "#cccccc",
                  width: 30,
                  input: { color: "#cccccc" },
                }}
                value={parseInt(roomFilter.init)}
                size="small"
                onChange={(event) => handleChgInput(event, "init")}
                onBlur={handleLimits}
                variant="standard"
                id={`${room}_input_izquierda`} // accessibility purposes
                inputProps={{
                  step: 1,
                  min: (room == "Garage" ? 0 : 1),
                  max: 7,
                  onKeyDown: (event) => {
                    //prevents the user from changing the value through its keyboard, except if using ArrowUp/ArrowDown
                    event.code === "ArrowUp" || event.code === "ArrowDown"
                      ? handleChgInput(event, "init")
                      : event.preventDefault();
                  },
                  type: "number",
                  "aria-labelledby": "input-slider",
                  tabIndex: -1,
                }}
              />
            </Grid>
            <Grid item xs>
              <SliderMui
                getAriaLabel={() => `Define el min y max de ${room}`}
                value={[parseInt(roomFilter.init), parseInt(roomFilter.limit)]}
                getAriaValueText={valuetext}
                valueLabelDisplay={windowWidth.current >= 768 ? "auto" : "on"}
                onChange={(_event, newValue, activeThumb) =>
                  handleChgSlider(newValue, activeThumb)
                }
                step={1}
                marks
                min={room == "Garage" ? 0 : 1}
                max={7}
                disableSwap
                tabIndex={0}
              />
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <span className="minMaxSpan">Max:{"  "}</span>
              <TextField
                sx={{
                  color: "#cccccc",
                  width: 30,
                  input: { color: "#cccccc" },
                }}
                value={parseInt(roomFilter.limit)}
                size="small"
                onChange={(event) => handleChgInput(event, "limit")}
                onBlur={handleLimits}
                variant="standard"
                id={`${room}_input_derecha`} // accessibility purposes
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
                  tabIndex: -1,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
};
/****************************** */
// TypeChecking
Slider.propTypes = {
  props: PropTypes.exact({
    handleChange: PropTypes.func.isRequired,
    room: PropTypes.string.isRequired,
    reducerVarName: PropTypes.string.isRequired,
    roomFilter: PropTypes.exact({
      init: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
    }),
    btsBreakpoints: PropTypes.object,
  }),
};
/****************************** */

export default Slider;
