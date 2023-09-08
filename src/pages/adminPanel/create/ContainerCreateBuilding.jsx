// BTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import Form from "./Form.jsx";
import CategDropdown from "../baseComponents/CategDropdown.jsx";
// Hooks
import { useState } from "react";
// TypeChecking
import PropTypes from "prop-types";

const ContainerCreateBuilding = ({ jwtToken }) => {

  // *********************
  // Variables & Functions
  
  const [category, setCategory] = useState("Categoría");
  const formContainerStyle = { border: "1px solid #ced4da", padding: 0 };
  const rowClassName = "flex-column align-items-center";
  const categDropdownClassName = "text-center mb-4";

  // *********************
  // Rendering

  return (
    <Container>
      <Row className={rowClassName}>
        <Col className={categDropdownClassName}>
          <CategDropdown
            variant="success"
            setCategory={setCategory}
            category={category}
          />
        </Col>
        <Col style={formContainerStyle} sm={12} md={12} lg={8} xl={7} xxl={6}>
          <Form category={category} jwtToken={jwtToken} />
        </Col>
      </Row>
    </Container>
  );
};

/****************************** */
// TypeChecking
ContainerCreateBuilding.propTypes = {
  jwtToken: PropTypes.string
};
/****************************** */

export default ContainerCreateBuilding;
