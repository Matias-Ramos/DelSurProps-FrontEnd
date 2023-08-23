import FormBTS from "react-bootstrap/Form";

const LocationInput = () => (
  <FormBTS.Group className="formItem" controlId="locationInput">
    <FormBTS.Label>Ubicación</FormBTS.Label>
    <FormBTS.Control
      type="text"
      placeholder="Dirección, barrio"
      required
      name="location"
    />
    <FormBTS.Control.Feedback type="invalid">
      *Campo mandatorio.
    </FormBTS.Control.Feedback>
    <FormBTS.Text className="text-muted">
      De incluír barrio, separarlo con una coma{'(",")'}.
    </FormBTS.Text>
  </FormBTS.Group>
);

export default LocationInput;
