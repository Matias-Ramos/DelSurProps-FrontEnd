// Hooks
import { useLocation } from "react-router-dom";
import { useReducer, useEffect, useMemo } from "react";
// Components
import ButtonGroup from "@mui/material/ButtonGroup";
import NavBtn from "./NavBtn.jsx";
// Reducer
import { colorModifier, defaultDotStatuses } from "./reducerUtils.js";
// Mui Styling
import { createTheme, ThemeProvider } from '@mui/material';
import customTheme from './btnsTheme.js'

const NavBtnsContainer = () => {
  const URLpath = useLocation().pathname;
  const [colorStatuses, dispatch] = useReducer(colorModifier,defaultDotStatuses);

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

  useEffect(() => {
    switch (URLpath) {
      case "/alquiler-inmuebles":
        handleClick("orange");
        break;
      case "/venta-inmuebles":
        handleClick("blue");
        break;
      case "/emprendimientos":
        handleClick("turquoise");
        break;
      default: // '/', Welcome.jsx
        break;
    }
  }, [URLpath]);

  const btnSharedProps = useMemo(() => {
    return {
      URLpath: URLpath,
      handleClick: handleClick,
      handleHover: handleHover,
    };
  });

  const theme = createTheme(customTheme)

  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup aria-label="Grupo de botones para definir el contenido de la página">
        <NavBtn
          btnSharedProps={btnSharedProps}
          thisPath={"/alquiler-inmuebles"}
          contained="containedOrange"
          outlined="outlinedOrange"
          colorName={"orange"}
          colorStatus={colorStatuses.orangeStatus}
          btnTxt={"Alquilar"}
        />
        <NavBtn
          btnSharedProps={btnSharedProps}
          thisPath={"/venta-inmuebles"}
          contained="containedBlue"
          outlined="outlinedBlue"
          colorName={"blue"}
          colorStatus={colorStatuses.blueStatus}
          btnTxt={"Comprar"}
        />
        <NavBtn
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

export default NavBtnsContainer;
