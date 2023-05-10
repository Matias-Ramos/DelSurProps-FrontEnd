import { Container, Row, Col } from "react-bootstrap";

const Attributions = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <i>
            Developer:{" "}
            <a
              href="https://www.linkedin.com/in/matias-ramos-computacion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matias Ramos
            </a>
          </i>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <i>
            Background:{" "}
            <a
              href="https://www.svgbackgrounds.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SVG backgrounds
            </a>
          </i>
        </Col>
      </Row>
    </Container>
  );
};
// https://www.svgbackgrounds.com/
export default Attributions;
