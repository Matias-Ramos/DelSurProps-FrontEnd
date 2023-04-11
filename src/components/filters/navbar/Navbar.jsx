import LocationFilter2 from "../location/LocationFilter2.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
// Bts
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBts from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = ({ filtersProps }) => {

  return (
    <>
       <NavbarBts variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <NavbarBts.Brand href="#home">Filtros: </NavbarBts.Brand>
        <NavbarBts.Toggle aria-controls="navbar-dark-example" />
        <NavbarBts.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Ubicación"
              menuVariant="dark"
            >
              <NavDropdown.ItemText>
                <LocationFilter2 filtersProps={filtersProps} />
              </NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Precio"
              menuVariant="dark"
            >
              <NavDropdown.ItemText>
                <LocationFilter2 filtersProps={filtersProps} />
              </NavDropdown.ItemText>
            </NavDropdown>
          </Nav>
        </NavbarBts.Collapse>
      </Container>
    </NavbarBts>      
    </>
  );
};

export default Navbar;

