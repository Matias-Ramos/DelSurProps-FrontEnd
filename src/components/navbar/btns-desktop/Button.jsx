// Components
import MuiBtn from "@mui/material/Button";
import { Link } from "react-router-dom";

const Button = ({
  btnSharedProps: { URLpath , handleClick, handleHover, getClasses },
  thisPath,
  contained,
  outlined,
  colorName,
  colorStatus,
  btnTxt,
}) => {
  const getVariant = () =>
    thisPath === URLpath ? contained : outlined;

    //activeKmRange is the className value to define, if the condition on the right side is true
  return (
    <Link to={{ pathname: thisPath }} state={{ prevPath: URLpath }}>
      <MuiBtn
        className={getClasses()}
        variant={getVariant()}
        onClick={() => handleClick(colorName)}
        onMouseEnter={() => handleHover(true, colorName)}
        onMouseLeave={() => handleHover(false, colorName)}
      >
        <img src={colorStatus} className="circleIcon" alt="Ícono decorativo" />
        {URLpath === thisPath ? <h1>{btnTxt}</h1> : <span>{btnTxt}</span>}
      </MuiBtn>
    </Link>
  );
};

export default Button;
