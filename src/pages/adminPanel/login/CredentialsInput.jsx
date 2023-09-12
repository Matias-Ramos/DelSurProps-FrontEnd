// Components
import Button from "react-bootstrap/Button";
import PwdVisibilityBtn from "./PwdVisibilityBtn";
// Hooks
import { useState } from "react";
// Styles
import {
  cssCredentialsInputContainer,
  cssCredentialsLabel,
} from "./loginCssStyles.js";
// Typechecking
import PropTypes from "prop-types";

const CredentialsInput = ({ setPwd, submitPwd }) => {
  const [inputType, setInputType] = useState("password");
  const changePwdVisibility = () => {
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  };

  return (
    <>
      <div style={cssCredentialsInputContainer}>
        <label style={cssCredentialsLabel}>
          Contraseña:{" "}
          <input
            type={inputType}
            onChange={(e) => setPwd(e.target.value)}
            name="contraseña"
          />
        </label>
        <PwdVisibilityBtn changePwdVisibility={changePwdVisibility} />
      </div>
      <Button variant="primary" className="mt-1" onClick={submitPwd}>
        Enviar
      </Button>
    </>
  );
};

/****************************** */
// TypeChecking
CredentialsInput.propTypes = {
  setPwd: PropTypes.func,
  submitPwd: PropTypes.func,
};
/****************************** */
export default CredentialsInput;
