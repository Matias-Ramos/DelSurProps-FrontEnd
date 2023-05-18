// Bts
import { NavDropdown } from "react-bootstrap";
// Animation
import { motion } from "framer-motion";
// Typechecking
import PropTypes from "prop-types";

const Dropdown = ({ title, filterComponent, filtersVariant, alignCenter }) => (
  <motion.div variants={filtersVariant} style={alignCenter}>
    <NavDropdown title={title} menuVariant="dark">
      <NavDropdown.ItemText>{filterComponent}</NavDropdown.ItemText>
    </NavDropdown>
  </motion.div>
);

/****************************** */
// TypeChecking
Dropdown.propTypes = {
  title: PropTypes.string,
  filterComponent: PropTypes.element,
  filtersVariant: PropTypes.object,
  alignCenter: PropTypes.object,
};
/****************************** */

export default Dropdown;
