import FormBTS from "react-bootstrap/Form";
const TotalSurfaceInput = () => (
  <FormBTS.Group className="formItem" controlId="totalSurfaceInput">
    <FormBTS.Label>Superficie total</FormBTS.Label>
    <FormBTS.Control
      type="number"
      placeholder="100, 200..."
      name="total_surface"
    />
  </FormBTS.Group>
);

export default TotalSurfaceInput;
