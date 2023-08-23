import FormBTS from "react-bootstrap/Form";

const PriceInput = () => (
  <FormBTS.Group className="formItem" controlId="priceInput">
    <FormBTS.Label>Precio</FormBTS.Label>
    <FormBTS.Control type="number" placeholder="$" required name="price" />
    <FormBTS.Control.Feedback type="invalid">
      *Campo mandatorio.
    </FormBTS.Control.Feedback>
  </FormBTS.Group>
);

export default PriceInput;
