import FormBTS from "react-bootstrap/Form";

const GaragesInput = () => (
  <FormBTS.Group className="formItem" controlId="garageInput" name="garage">
    <FormBTS.Label>Cocheras</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." />
  </FormBTS.Group>
);

export default GaragesInput;
