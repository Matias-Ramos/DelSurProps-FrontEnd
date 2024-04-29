// Components
import NavBtns from "../btns-desktop/NavBtns.jsx";
import Select from "../select-mobile/Select.jsx";
// Hooks
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const windowWidth = useRef(window.innerWidth);
  const URLpath = useLocation().pathname;
  return (
    <div id="topNavbar">
      {windowWidth.current >= 768 ? (
        <NavBtns URLpath={URLpath} />
      ) : (
        <Select URLpath={URLpath} />
      )}
      <span id="brand">DelSurProps [DEMO]</span>
      <div id="hr"></div>
    </div>
  );
};

export default Navbar;
