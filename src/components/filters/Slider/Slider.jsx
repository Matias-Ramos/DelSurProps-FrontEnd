import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SliderMui from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import ConfirmBtn from "../ConfirmBtn";

const Input = styled(MuiInput)`
  width: 35px;
`;

export default function Slider({
  props : { 
  chgReducerRoom,
  handleChange,
  room,
  reducerVarName,
  roomInitQyParams,
  roomLimitQyParams,
  roomFilter,
   }
}) {
  const valuetext = (value) => `${value[0]} a ${value[1]} ${room}`; // slider accessibility

  const handleBlur = () => {
    if (roomFilter.init < 0) {
      handleChange(1, reducerVarName, "init");
    } else if (roomFilter.limit > 7) {
      handleChange(7, reducerVarName, "limit");
    }
  };

  useEffect(() => {
    roomInitQyParams !== null &&
      chgReducerRoom(roomInitQyParams, `${reducerVarName}Chgd`, "init");
    roomLimitQyParams !== null &&
      chgReducerRoom(roomLimitQyParams, `${reducerVarName}Chgd`, "limit");
  }, [roomInitQyParams, roomLimitQyParams]);

  // disables swap between min and max value and updates the reducer values
  const handleChange1 = (event, newValue, activeThumb) => {
    const minDistance = 0;
    if (!Array.isArray(newValue)) {
      return;
    }
    //left slider-handle was used
    if (activeThumb === 0) {
      event.target.value = [
        Math.min(newValue[0], parseInt(roomFilter.limit) - minDistance),
        parseInt(roomFilter.limit),
      ];
      handleChange(event, reducerVarName, null);
    }
    //right slider-handle was used
    else {
      event.target.value = [
        parseInt(roomFilter.init),
        Math.max(newValue[1], parseInt(roomFilter.init) + minDistance),
      ];
      handleChange(event, reducerVarName, null);
    }
  };

  const handleChange2 = (event, edge) => {
    const minDistance = 0;
    //left input was used
    if (edge === "init") {
      const evt = {
        target: {
          value: [
            Math.min(
              parseInt(event.target.value),
              parseInt(roomFilter.limit) - minDistance
            ),
            parseInt(roomFilter.limit),
          ],
        },
      };
      handleChange(evt, reducerVarName, null);
    }
    //right input was used
    else {
      const evt = {
        target: {
          value: [
            parseInt(roomFilter.init),
            Math.max(
              parseInt(event.target.value),
              parseInt(roomFilter.init) + minDistance
            ),
          ],
        },
      };
      handleChange(evt, reducerVarName, null);
    }
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
              // onChange={(event) => handleChange(event, reducerVarName, "init")}
              onChange={(event) => handleChange2(event, "init")}
              onBlur={handleBlur}
              className="sliderInput"
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
              getAriaLabel={() => `Rango de ${room}`}
              value={[parseInt(roomFilter.init), parseInt(roomFilter.limit)]}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              // onChange={(event) => handleChange(event, reducerVarName, null)}
              onChange={(event, newValue, activeThumb) =>
                handleChange1(event, newValue, activeThumb)
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
              // onChange={(event) => handleChange(event, reducerVarName, "limit")}
              onChange={(event) => handleChange2(event, "limit")}
              onBlur={handleBlur}
              sx={{ input: { cursor: "default" } }}
              id={room} // accessibility purposes
              inputProps={{
                step: 1,
                min: 1,
                max: 7,
                //prevents the use from changing the value through its keyboard
                onKeyDown: (event) => {
                  event.code === "ArrowUp" || event.code === "ArrowDown"
                    ? handleChange(event, reducerVarName, "limit")
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
