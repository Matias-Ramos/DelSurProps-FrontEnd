import Button from "react-bootstrap/Button";

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

export default CredentialsInput;
