import ConfirmBtn from "../ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
import { useMemo, useEffect } from "react";

const SliderContainer = ({
  props:{
    updateQyParams,
    deleteQyParam,
    searchQyParams,
    filters,
    dispatch,
  }
}) => {
  const chgReducerRoom = (newRoomValue, dispatchRoom, edge, roomName) => {
    dispatch({
      type: dispatchRoom,
      newRoomValue: newRoomValue,
      edge: edge,
      roomName: roomName,
    });
  };
  // verifies qyParam on first render and updates the useReducer if there are such.
  useEffect(() => {
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
  }, []);
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
  
  return (
    <>
      {sliderProps && Sliders()}
      <div className="filterSubmClean">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>Limpiar</button>
      </div>
    </>
  );
};

export default SliderContainer;
