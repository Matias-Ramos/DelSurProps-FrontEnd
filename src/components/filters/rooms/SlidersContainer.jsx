// Hooks
import { useMemo } from "react";
// Grid sys
import { Container, Row, Col } from "react-bootstrap";
// Typechecking
import PropTypes from "prop-types";
// Components
import ConfirmBtn from "../buttons/ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
import EdgeIndicator from "./EdgeIndicator.jsx";

const SlidersContainer = ({
  filterModifiers: { updateQyParams, deleteQyParam, dispatch },
  filters,
}) => {
  /****************************** */
  // Functions & variables

  const chgReducerRoom = (newRoomValue, dispatchRoom, edge, roomName) => {
    dispatch({
      type: dispatchRoom,
      newRoomValue: newRoomValue,
      edge: edge,
      roomName: roomName,
    });
  };
  const handleChange = (newValue, room, edge) => {
    chgReducerRoom(newValue, `${room}Chgd`, edge, room);
  };
  const handleSubmit = () => {
    const rooms = ["env", "bedroom", "bathroom", "garage"];
    for (let roomType of rooms) {
      for (let edge in filters[roomType]) {
        updateQyParams(`${roomType}_${edge}`, filters[roomType][edge]);
      }
    }
  };
  const handleClean = () => {
    const rooms = ["env", "bedroom", "bathroom", "garage"];
    const defaultValues = { init: 1, limit: 7 };
    rooms.forEach((room) => {
      for (let i = 0; i <= 1; i++) {
        deleteQyParam(`${room}_${Object.keys(defaultValues)[i]}`);
        chgReducerRoom(
          Object.values(defaultValues)[i],
          `${room}Chgd`,
          Object.keys(defaultValues)[i],
          room
        );
      }
    });
  };
  const btsBreakpoints = {
    // sets mui breakpoints same as bts
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
  };
  /****************************** */
  // Components creation

  const sliderProps = useMemo(() => {
    const roomsNomenclature = [
      { spanishVarName: "Ambientes", reducerVarName: "env" },
      { spanishVarName: "Dormitorios", reducerVarName: "bedroom" },
      { spanishVarName: "Baños", reducerVarName: "bathroom" },
      { spanishVarName: "Garage", reducerVarName: "garage" },
    ];
    const props = roomsNomenclature.map((room) => {
      return {
        handleChange: handleChange,
        room: room.spanishVarName,
        reducerVarName: room.reducerVarName,
        roomFilter: filters[room.reducerVarName],
        btsBreakpoints: btsBreakpoints,
      };
    });
    return props;
  }, [filters]);
  const Sliders = () => {
    const result = [];
    for (let i = 0; i <= 3; i++) {
      result.push(<Slider key={i} props={sliderProps[i]} />);
    }
    return result;
  };

  /****************************** */
  // Rendering
  return (
    <Container fluid>
      <Row className="justify-content-around">
        <Col
          xs={1}
          sm={1}
          className="d-md-none d-lg-none d-xl-none d-xxl-none p-0"
        >
          <EdgeIndicator edge={"Min"} />
        </Col>
        <Col xs={9} sm={9} md={12} lg={12} xl={12} xxl={12}>
          {sliderProps && Sliders()}
        </Col>
        <Col
          xs={1}
          sm={1}
          className="d-md-none d-lg-none d-xl-none d-xxl-none p-0"
        >
          <EdgeIndicator edge={"Max"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="btnsSubmitClean-Container">
            <ConfirmBtn handleSubmit={handleSubmit} />
            <button className="cleanBtn" onClick={handleClean}>
              Limpiar
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

/****************************** */
// TypeChecking
SlidersContainer.propTypes = {
  filterModifiers: PropTypes.exact({
    updateQyParams: PropTypes.func.isRequired,
    deleteQyParam: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }),
  filters: PropTypes.shape({
    bathroom: PropTypes.exact({
      init: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
    }),
    bedroom: PropTypes.exact({
      init: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
    }),
    garage: PropTypes.exact({
      init: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
    }),
    env: PropTypes.exact({
      init: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
    }),
  }),
};
/****************************** */

export default SlidersContainer;
