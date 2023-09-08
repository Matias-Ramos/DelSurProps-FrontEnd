import DropdownBTS from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// Typechecking
import PropTypes from "prop-types"

const CategDropdown = ({setCategory, category, variant}) => (
    <DropdownButton variant={variant} title={category} size="lg">
      <DropdownBTS.Item onClick={()=>{setCategory("Venta inmueble")}}>Venta inmueble</DropdownBTS.Item>
      <DropdownBTS.Item onClick={()=>{setCategory("Emprendimiento")}}>Emprendimiento</DropdownBTS.Item>
      <DropdownBTS.Item onClick={()=>{setCategory("Alquiler inmueble")}}>Alquiler inmueble</DropdownBTS.Item>
    </DropdownButton>
    )

/****************************** */
// TypeChecking
CategDropdown.propTypes = {
  setCategory: PropTypes.func,
  category: PropTypes.string,
  variant: PropTypes.string,
};
/****************************** */

export default CategDropdown;