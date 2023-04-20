// Components
import MuiBtn from "@mui/material/Button";
import { Link } from "react-router-dom";

const Button = ({
  btnSharedProps: { URLpath, handleClick, handleHover },
  thisPath,
  contained,
  outlined,
  colorName,
  colorStatus,
  btnTxt,
}) => {
  const getVariant = (thisPath) =>
    thisPath === URLpath ? contained : outlined;
  return (
    <Link to={thisPath}>
      <MuiBtn
        variant={getVariant(thisPath)}
        onClick={() => handleClick(colorName)}
        onMouseEnter={() => handleHover(true, colorName)}
        onMouseLeave={() => handleHover(false, colorName)}
      >
        <img src={colorStatus} className="circleIcon" alt="Ícono decorativo" />
        {btnTxt}
      </MuiBtn>
    </Link>
  );
};

export default Button;
