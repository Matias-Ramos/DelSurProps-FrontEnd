import Button from "react-bootstrap/Button";
import { eyeIconSvgPath } from "../utils";
import { cssVisibilityBtn } from "./loginCssStyles.js";
import PropTypes from "prop-types";

const PwdVisibilityBtn = ({ changePwdVisibility }) => (
  <Button onClick={changePwdVisibility} style={cssVisibilityBtn}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
      <path d={eyeIconSvgPath} />
    </svg>
  </Button>
);

/****************************** */
// TypeChecking
PwdVisibilityBtn.propTypes = {
  changePwdVisibility: PropTypes.func,
};
/****************************** */
export default PwdVisibilityBtn;
