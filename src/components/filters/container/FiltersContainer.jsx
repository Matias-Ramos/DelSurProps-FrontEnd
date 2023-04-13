// Components
import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import BuildStatusFilter from "../buildStatus/BuildStatusFilter.jsx";
import SurfaceFilterContainer from "../surface/SurfaceFilterContainer.jsx";
// Hooks
import { useContext, useReducer, useMemo } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
import { filterModifier, filterStructure } from "./reducerUtils.js";
import { useLocation } from "react-router-dom";
// Bts
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const FiltersContainer = () => {
  const { searchQyParams, updateQyParams, deleteQyParam } = useContext(queryCtxt);
  const [filters, dispatch] = useReducer(filterModifier, filterStructure);
  const URLpath = useLocation().pathname;
  const filtersProps = useMemo(() => {
    return {
      filters: filters,
      dispatch: dispatch,
      updateQyParams: updateQyParams,
      deleteQyParam: deleteQyParam,
      searchQyParams: searchQyParams,
    };
  });
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand>Filtros: </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              {/* Location */}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Ubicación"
                menuVariant="dark"
              >
                <NavDropdown.ItemText>
                  <LocationFilter props={filtersProps} />
                </NavDropdown.ItemText>
              </NavDropdown>
              {/* Price */}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Precio"
                menuVariant="dark"
              >
                <NavDropdown.ItemText>
                  <PriceFilter props={filtersProps} />
                </NavDropdown.ItemText>
              </NavDropdown>
              {/* Slider */}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Habitaciones"
                menuVariant="dark"
              >
                <NavDropdown.ItemText>
                  <SliderContainer props={filtersProps} />
                </NavDropdown.ItemText>
              </NavDropdown>
              {/* Surface */}
              {(URLpath === "/venta-inmuebles" || URLpath === "/emprendimientos") && (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Superficie"
                  menuVariant="dark"
                >
                  <NavDropdown.ItemText>
                    <SurfaceFilterContainer props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              )}
              {/* BuildStatus */}
              {URLpath === "/emprendimientos" && (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Estado"
                  menuVariant="dark"
                >
                  <NavDropdown.ItemText>
                    <BuildStatusFilter props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FiltersContainer;
