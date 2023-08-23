import FormBTS from "react-bootstrap/Form";
const EnvInput = () => (
  <FormBTS.Group className="formItem" controlId="envInput">
    <FormBTS.Label>Ambientes</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." name="env" />
  </FormBTS.Group>
);

export default EnvInput;
