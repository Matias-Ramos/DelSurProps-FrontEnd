// Bts
import { NavDropdown } from "react-bootstrap";
//Animation
import { motion } from "framer-motion";

const Dropdown = ({ title, filterComponent, filtersVariant, alignCenter }) => (
  <motion.div variants={filtersVariant} style={alignCenter}>
    <NavDropdown title={title} menuVariant="dark">
      <NavDropdown.ItemText>{filterComponent}</NavDropdown.ItemText>
    </NavDropdown>
  </motion.div>
);

export default Dropdown;
