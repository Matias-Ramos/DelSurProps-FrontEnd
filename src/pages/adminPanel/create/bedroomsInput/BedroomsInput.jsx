import FormBTS from "react-bootstrap/Form";
const BedroomsInput = () => (
  <FormBTS.Group className="formItem" controlId="bedroomInput" name="bedroom">
    <FormBTS.Label>Dormitorios</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." />
  </FormBTS.Group>
);

export default BedroomsInput;
