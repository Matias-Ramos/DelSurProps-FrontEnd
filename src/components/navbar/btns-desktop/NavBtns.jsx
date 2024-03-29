import classNames from "classnames";
// Hooks
import { useReducer, useEffect, useMemo, useRef } from "react";
// Components
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "./Button.jsx";
// Reducer
import { colorModifier, defaultDotStatuses } from "./reducerUtils.js";
// Mui Styling
import { createTheme, ThemeProvider } from "@mui/material";
import customTheme from "./btnsTheme.js";
// PropTypes
import PropTypes from "prop-types"


const NavBtns = ({ URLpath = "/" }) => {

  /****************************** */
  // Functions

  const [colorStatuses, dispatch] = useReducer(
    colorModifier,
    defaultDotStatuses
  );
  const theme = createTheme(customTheme);
  const windowWidth = useRef(window.innerWidth);
  function handleClick(color) {
    dispatch({
      type: `${color}Chgd`,
      hover: false,
    });
  }
  function handleHover(focused, color) {
    dispatch({
      type: `${color}Chgd`,
      hover: true,
      focused: focused,
    });
  }
  const getClasses = () => {
    return classNames({
      inWelcome: URLpath === "/",
    });
  };
  const btnSharedProps = useMemo(() => {
    return {
      URLpath: URLpath,
      handleClick: handleClick,
      handleHover: handleHover,
      getClasses: getClasses,
    };
  });

  /****************************** */

  // chgs dot color based on URL path
  useEffect(() => {
    switch (URLpath) {
      case "/alquiler_inmuebles":
        handleClick("orange");
        break;
      case "/venta_inmuebles":
        handleClick("blue");
        break;
      case "/emprendimientos":
        handleClick("turquoise");
        break;
      default: // '/', Welcome.jsx
        break;
    }
  }, [URLpath]);

  
  /****************************** */
  // Rendering

  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup
        aria-label="Grupo de botones para definir el contenido de la página"
        orientation={windowWidth.current >= 440 ? "horizontal" : "vertical"}
      >
        <Button
          btnSharedProps={btnSharedProps}
          thisPath={"/venta_inmuebles"}
          contained="containedBlue"
          outlined="outlinedBlue"
          colorName={"blue"}
          colorStatus={colorStatuses.blueStatus}
          btnTxt={"Comprar"}
        />
        <Button
          btnSharedProps={btnSharedProps}
          thisPath={"/alquiler_inmuebles"}
          contained="containedOrange"
          outlined="outlinedOrange"
          colorName={"orange"}
          colorStatus={colorStatuses.orangeStatus}
          btnTxt={"Alquilar"}
        />
        <Button
          btnSharedProps={btnSharedProps}
          thisPath={"/emprendimientos"}
          contained="containedTurquoise"
          outlined="outlinedTurquoise"
          colorName={"turquoise"}
          colorStatus={colorStatuses.turquoiseStatus}
          btnTxt={"Emprendimientos"}
        />
      </ButtonGroup>
    </ThemeProvider>
  );
};

/****************************** */
// TypeChecking
NavBtns.propTypes = {
  URLpath: PropTypes.string,
}
/****************************** */

export default NavBtns;
