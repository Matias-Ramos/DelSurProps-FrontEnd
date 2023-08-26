import FormBTS from "react-bootstrap/Form";

const GaragesInput = () => (
  <FormBTS.Group className="formItem" controlId="garageInput" >
    <FormBTS.Label>Cocheras</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="1, 2, 3..." name="garages"/>
  </FormBTS.Group>
);

export default GaragesInput;
