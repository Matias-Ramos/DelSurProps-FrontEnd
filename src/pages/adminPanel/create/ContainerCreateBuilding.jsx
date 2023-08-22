// Hooks
import { useState } from "react";
// BTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import Form from "./Form.jsx";
import Dropdown from "./Dropdown.jsx";
import Attribution from "../../../components/footer/Attribution.jsx";

const ContainerCreateBuilding = () => {
  const [category, setCategory] = useState("Categoría");

  return (
    <Container>
      <Row className="flex-column align-items-center">
        <Col className="text-center mb-4">
          <Dropdown setCategory={setCategory} category={category} />
        </Col>
        <Col
          style={{ border: "1px solid #ced4da", padding: 0 }}
          sm={12}
          md={12}
          lg={8}
          xl={7}
          xxl={6}
        >
          <Form category={category} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerCreateBuilding;
