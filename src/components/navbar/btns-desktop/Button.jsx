// Components
import MuiBtn from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

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

/****************************** */
// TypeChecking
Button.propTypes = {
  btnSharedProps: PropTypes.exact({
    URLpath: PropTypes.string,
    handleClick: PropTypes.func,
    handleHover: PropTypes.func,
    getClasses: PropTypes.func,
  }),
  thisPath: PropTypes.string,
  contained: PropTypes.string,
  outlined: PropTypes.string,
  colorName: PropTypes.string,
  colorStatus: PropTypes.string,
  btnTxt: PropTypes.string,
};
/****************************** */

export default Button;
