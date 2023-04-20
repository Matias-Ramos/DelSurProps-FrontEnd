// Components
import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import BuildStatusFilter from "../buildStatus/BuildStatusFilter.jsx";
import SurfaceFilterContainer from "../surface/SurfaceFilterContainer.jsx";
import CleanBtn from "../../buttons/CleanBtn.jsx";
// Hooks
import { useContext, useReducer, useMemo, useEffect } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
import { filterModifier, defaultFilterValues } from "./reducerUtils.js";
import { useLocation } from "react-router-dom";
// Bts
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const FiltersContainer = () => {
  const { searchQyParams, updateQyParams, deleteQyParam } = useContext(queryCtxt);
  const [filters, dispatch] = useReducer(filterModifier, defaultFilterValues);
  const URLpath = useLocation().pathname;
  const filtersProps = useMemo(() => {
    return {
      filters: filters,
      dispatch: dispatch,
      updateQyParams: updateQyParams,
      deleteQyParam: deleteQyParam,
    };
  });

  // verifies qyParam on first render and updates the useReducer if there are such, before rendering the filters.
  useEffect(() => {
    
    searchQyParams.get("location") !== null && dispatch({
      type: "locationChgd",
      location: searchQyParams.get("location"),
    });

    /********************* */
    const chgReducerPrice = (newPrice, edge) =>
    dispatch({
      type: `priceChgd`,
      newPrice: newPrice,
      edge: edge,
    });
    searchQyParams.get("price_init") !== null && chgReducerPrice(parseInt(searchQyParams.get("price_init")), "init");
    searchQyParams.get("price_limit") !== null && chgReducerPrice(parseInt(searchQyParams.get("price_limit")), "limit");

    /********************* */

    const chgReducerRoom = (newRoomValue, dispatchRoom, edge, roomName) => {
      dispatch({
        type: dispatchRoom,
        newRoomValue: newRoomValue,
        edge: edge,
        roomName: roomName,
      });
    };    
    const rooms = ["env", "bedroom", "bathroom", "garage"];
    for (let room of rooms) {
      const roomInitQyParams = searchQyParams.get(`${room}_init`);
      const roomLimitQyParams = searchQyParams.get(`${room}_limit`);

      roomInitQyParams !== null &&
        chgReducerRoom(parseInt(roomInitQyParams), `${room}Chgd`, "init", room);
      roomLimitQyParams !== null &&
        chgReducerRoom(parseInt(roomLimitQyParams), `${room}Chgd`, "limit", room);
    }

    /********************* */

    const chgReducerSurface = (newSurface, surfaceType, edge) => {
      dispatch({
        type: "surfaceChgd",
        newSurface: newSurface,
        surfaceType: surfaceType,
        edge: edge,
      });
    };
    const surfaceTypes = ["total", "covered"];
    for (let type of surfaceTypes) {
      const roomInitQyParams = searchQyParams.get(`${type}_surface_init`);
      const roomLimitQyParams = searchQyParams.get(`${type}_surface_limit`);

      roomInitQyParams !== null &&
        chgReducerSurface(parseInt(roomInitQyParams), type, "init");

      roomLimitQyParams !== null &&
        chgReducerSurface(parseInt(roomLimitQyParams), type, "limit");
    }

    /********************* */

    if(searchQyParams.get("building_status") !== null){
      const preFilteredStatuses = searchQyParams.get("building_status").split('-or-');
      const allStatuses = Object.keys(filters.buildingStatus);
      const nonChosenstatuses = allStatuses.filter(function(obj) { return preFilteredStatuses.indexOf(obj) == -1; });
      for(let status of nonChosenstatuses){
        dispatch({
          type: "buildingStatusChgd",
          status:status,
          isChecked: false,
        })
      }
    }
  }, []);

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" sticky="top" >
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
              {(URLpath === "/venta-inmuebles" ||
                URLpath === "/emprendimientos") && (
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
                  title="Etapa"
                  menuVariant="dark"
                >
                  <NavDropdown.ItemText>
                    <BuildStatusFilter props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              )}
            </Nav>
            <Navbar.Text>
              <CleanBtn dispatch={dispatch}/>
            </Navbar.Text>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FiltersContainer;
