// Hooks
import { useState, useEffect } from "react";
// BTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import Form from "./Form.jsx";
import CategDropdown from "../CategDropdown.jsx";

const ContainerCreateBuilding = ({jwtToken}) => {
  const [category, setCategory] = useState("Categoría"); 

  return (
    <Container>
      <Row className="flex-column align-items-center">
        <Col className="text-center mb-4">
          <CategDropdown variant="success" setCategory={setCategory} category={category} />
        </Col>
        <Col
          style={{ border: "1px solid #ced4da", padding: 0 }}
          sm={12}
          md={12}
          lg={8}
          xl={7}
          xxl={6}
        >
          <Form category={category} jwtToken={jwtToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerCreateBuilding;
