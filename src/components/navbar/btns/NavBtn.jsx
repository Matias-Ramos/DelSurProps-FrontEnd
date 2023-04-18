// Components
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBtn = ({
  btnSharedProps: { URLpath, handleClick, handleHover },
  thisPath,
  colorName,
  colorStatus,
  btnTxt,
}) => {
  const getVariant = (thisPath) =>
    thisPath === URLpath ? "contained" : "outlined";
  return (
    <Link to={thisPath}>
      <Button
        variant={getVariant(thisPath)}
        onClick={() => handleClick(colorName)}
        onMouseEnter={() => handleHover(true, colorName)}
        onMouseLeave={() => handleHover(false, colorName)}
      >
        <img src={colorStatus} className="circleIcon" alt="Ícono decorativo" />
        {btnTxt}
      </Button>
    </Link>
  );
};

export default NavBtn;
