import FormBTS from "react-bootstrap/Form";
const BedroomsInput = () => (
  <FormBTS.Group className="formItem" controlId="bedroomInput">
    <FormBTS.Label>Dormitorios</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." name="bedrooms"/>
  </FormBTS.Group>
);

export default BedroomsInput;
