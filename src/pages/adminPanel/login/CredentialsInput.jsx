import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const CredentialsInput = ({setPwd, submitPwd}) => (
  <>
    <label>
      Contraseña:{" "}
      <input onChange={(e) => setPwd(e.target.value)} name="contraseña" />
    </label>
    <Button variant="primary" className="mt-1" onClick={submitPwd}>
      Enviar
    </Button>
  </>
);
/****************************** */
// TypeChecking
CredentialsInput.propTypes = {
  setPwd: PropTypes.func,
  submitPwd: PropTypes.func,
};
/****************************** */
export default CredentialsInput;
