// Hooks
import { useLocation } from "react-router-dom";
import { useReducer, useEffect, useMemo } from "react";
// Components
import ButtonGroup from "@mui/material/ButtonGroup";
import NavBtn from "./NavBtn.jsx";
// Reducer
import { colorModifier, defaultDotStatuses } from "./reducerUtils.js";

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

  return (
    <ButtonGroup aria-label="outlined primary button group">
      <NavBtn
        btnSharedProps={btnSharedProps}
        thisPath={"/alquiler-inmuebles"}
        colorName={"orange"}
        colorStatus={colorStatuses.orangeStatus}
        btnTxt={"Alquilar"}
      />
      <NavBtn
        btnSharedProps={btnSharedProps}
        thisPath={"/venta-inmuebles"}
        colorName={"blue"}
        colorStatus={colorStatuses.blueStatus}
        btnTxt={"Comprar"}
      />
      <NavBtn
        btnSharedProps={btnSharedProps}
        thisPath={"/emprendimientos"}
        colorName={"turquoise"}
        colorStatus={colorStatuses.turquoiseStatus}
        btnTxt={"Emprendimientos"}
      />
    </ButtonGroup>
  );
};

export default NavBtnsContainer;
