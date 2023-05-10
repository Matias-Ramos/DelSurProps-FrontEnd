import {
  // Components
  LocationFilter,
  PriceContainer,
  SlidersContainer,
  BuildStatusFilter,
  SurfaceFilterContainer,
  CleanBtn,
  // Hooks
  useContext,
  useReducer,
  useMemo,
  useEffect,
  useLocation,
  useMediaQuery,
  // --ctxt
  queryCtxt,
  // -- reducer
  filterModifier,
  defaultFilterValues,
  // Bts
  Container,
  Nav,
  Navbar,
  NavDropdown,
  // Animation
  motion,
  getFiltersVariant,
} from "./imports.js";

const FiltersContainer = ({ previousURL }) => {
  /****************************** */
  // Functions

  const { searchQyParams, updateQyParams, deleteQyParam } =
    useContext(queryCtxt);
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
  const isDesktop = useMediaQuery("(min-width:992px)");
  const isFirstRender =
    previousURL === "/" || previousURL === undefined ? true : false; //undefined = page loaded from url
  const filtersVariant = getFiltersVariant(isDesktop, isFirstRender);
  const alignCenter = { display: "flex", alignItems: "center" };
  /* verifies qyParam on first render and if there are such,
   it updates the useReducer values (before even rendering the filters).*/
  useEffect(() => {
    searchQyParams.get("location") !== null &&
      dispatch({
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
    searchQyParams.get("price_init") !== null &&
      chgReducerPrice(parseInt(searchQyParams.get("price_init")), "init");
    searchQyParams.get("price_limit") !== null &&
      chgReducerPrice(parseInt(searchQyParams.get("price_limit")), "limit");

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
        chgReducerRoom(
          parseInt(roomLimitQyParams),
          `${room}Chgd`,
          "limit",
          room
        );
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

    if (searchQyParams.get("building_status") !== null) {
      const preFilteredStatuses = searchQyParams
        .get("building_status")
        .split("-or-");
      const allStatuses = Object.keys(filters.buildingStatus);
      const nonChosenstatuses = allStatuses.filter(function (obj) {
        return preFilteredStatuses.indexOf(obj) == -1;
      });
      for (let status of nonChosenstatuses) {
        dispatch({
          type: "buildingStatusChgd",
          status: status,
          isChecked: false,
        });
      }
    }
  }, []);

  /****************************** */
  // Rendering

  return (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>Filtros: </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation-bar" />
        <Navbar.Collapse id="navigation-bar">
          <motion.div
            id="filtersMotionDiv"
            variants={filtersVariant}
            initial="initial"
            animate="animate"
          >
            <Nav navbarScroll>
              {/* ******** */}
              {/* Location */}
              <motion.div variants={filtersVariant} style={alignCenter}>
                <NavDropdown title="Ubicación" menuVariant="dark">
                  <NavDropdown.ItemText>
                    <LocationFilter props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              </motion.div>

              {/* ***** */}
              {/* Price */}
              <motion.div variants={filtersVariant} style={alignCenter}>
                <NavDropdown title="Precio" menuVariant="dark">
                  <NavDropdown.ItemText>
                    <PriceContainer props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              </motion.div>

              {/* ******* */}
              {/* Sliders */}
              <motion.div variants={filtersVariant} style={alignCenter}>
                <NavDropdown title="Habitaciones" menuVariant="dark">
                  <NavDropdown.ItemText id="sliderNavDropdown-ItemText">
                    <SlidersContainer props={filtersProps} />
                  </NavDropdown.ItemText>
                </NavDropdown>
              </motion.div>

              {/* ******* */}
              {/* Surface */}
              {(URLpath === "/venta-inmuebles" ||
                URLpath === "/emprendimientos") && (
                <motion.div variants={filtersVariant} style={alignCenter}>
                  <NavDropdown title="Superficie" menuVariant="dark">
                    <NavDropdown.ItemText>
                      <SurfaceFilterContainer props={filtersProps} />
                    </NavDropdown.ItemText>
                  </NavDropdown>
                </motion.div>
              )}

              {/* *********** */}
              {/* BuildStatus */}
              {URLpath === "/emprendimientos" && (
                <motion.div variants={filtersVariant} style={alignCenter}>
                  <NavDropdown title="Etapa" menuVariant="dark">
                    <NavDropdown.ItemText>
                      <BuildStatusFilter props={filtersProps} />
                    </NavDropdown.ItemText>
                  </NavDropdown>
                </motion.div>
              )}
            </Nav>
            <motion.div variants={filtersVariant} style={alignCenter}>
              <Navbar.Text>
                <CleanBtn dispatch={dispatch} />
              </Navbar.Text>
            </motion.div>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FiltersContainer;
