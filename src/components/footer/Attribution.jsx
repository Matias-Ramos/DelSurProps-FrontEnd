// Grid sys
import { Col } from "react-bootstrap";
// Typechecking
import PropTypes from "prop-types";

const Attribution = ({ role, link, name }) => (
  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
    <i>
      {role}:{" "}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </i>
  </Col>
);

/****************************** */
// TypeChecking
Attribution.propTypes = {
  role: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
/****************************** */

export default Attribution;
