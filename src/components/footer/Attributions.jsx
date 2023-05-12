import { Container, Row, Col } from "react-bootstrap";

const Attributions = ({bckgName, bckgLink}) => {
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
              href={bckgLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bckgName}
            </a>
          </i>
        </Col>
      </Row>
    </Container>
  );
};
// https://www.svgbackgrounds.com/
export default Attributions;
