import DropdownBTS from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CategDropdown = ({setCategory, category, variant}) => {
  return (
    <DropdownButton variant={variant} title={category} size="lg">
      <DropdownBTS.Item onClick={()=>{setCategory("Venta inmueble")}}>Venta inmueble</DropdownBTS.Item>
      <DropdownBTS.Item onClick={()=>{setCategory("Emprendimiento")}}>Emprendimiento</DropdownBTS.Item>
      <DropdownBTS.Item onClick={()=>{setCategory("Alquiler inmueble")}}>Alquiler inmueble</DropdownBTS.Item>
    </DropdownButton>
  );
}

export default CategDropdown;