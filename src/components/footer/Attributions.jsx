// Component
import Attribution from "./Attribution.jsx";
// Grid sys
import { Container, Row } from "react-bootstrap";

const Attributions = () => (
  <Container>
    <Row>
      <Attribution
        role="Developer"
        link="https://www.linkedin.com/in/matias-ramos-computacion/"
        name="Matias Ramos"
      />
      <Attribution
        role="Background"
        link="https://www.svgbackgrounds.com/"
        name="SVG backgrounds"
      />
    </Row>
  </Container>
);

export default Attributions;
