// Bts
import { NavDropdown } from "react-bootstrap";
//Animation
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import getFiltersVariant from "./variants.js";

const Dropdown = ({ previousURL, title, filterComponent: FilterComponent, filtersProps }) => {
    console.log(FilterComponent)
    console.log(filtersProps)
  const alignCenter = { display: "flex", alignItems: "center" };
  const isDesktop = useMediaQuery("(min-width:992px)");
  const isFirstRender =
    previousURL === "/" || previousURL === undefined ? true : false; //undefined = page loaded from url
  const filtersVariant = getFiltersVariant(isDesktop, isFirstRender);

  return (
    <motion.div variants={filtersVariant} style={alignCenter}>
      <NavDropdown title={title} menuVariant="dark">
        <NavDropdown.ItemText>
          <FilterComponent props={filtersProps} />
        </NavDropdown.ItemText>
      </NavDropdown>
    </motion.div>
  );
};

export default Dropdown;
