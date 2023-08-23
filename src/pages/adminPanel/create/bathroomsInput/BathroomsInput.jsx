import FormBTS from "react-bootstrap/Form";
const BathroomsInput = () => (
  <FormBTS.Group className="formItem" controlId="bathroomInput" name="bathroom">
    <FormBTS.Label>Baños</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." />
  </FormBTS.Group>
);

export default BathroomsInput;
