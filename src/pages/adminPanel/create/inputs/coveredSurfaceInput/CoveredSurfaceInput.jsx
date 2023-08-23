import FormBTS from "react-bootstrap/Form";
const CoveredSurfaceInput = () => (
  <FormBTS.Group className="formItem" controlId="coveredSurfaceInput">
    <FormBTS.Label>Superficie cubierta</FormBTS.Label>
    <FormBTS.Control
      type="number"
      placeholder="100, 200..."
      name="covered_surface"
    />
  </FormBTS.Group>
);

export default CoveredSurfaceInput;
