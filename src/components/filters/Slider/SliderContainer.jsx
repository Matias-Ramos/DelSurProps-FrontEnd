import ConfirmBtn from "../ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
import { useMemo, useCallback, useEffect } from "react";

const SliderContainer = ({
  updateQyParams,
  deleteQyParam,
  searchParams,
  filters,
  dispatch,
}) => {
  const chgReducerRoom = (newRoomValue, dispatchRoom, edge) =>
  dispatch({
    type: dispatchRoom,
    newRoomValue: newRoomValue,
    edge: edge,
  });
  const handleChange = (evt, room, edge) => {
    chgReducerRoom(evt.target.value, `${room}Chgd`, edge);
  };

  const handleSubmit = () => {
    const rooms = ["env", "bedroom", "bathroom", "garage"];
    for(let roomType of rooms){
      for (let edge in filters[roomType]) {
        updateQyParams(`${roomType}_${edge}`, filters[roomType][edge])
      }
    }
  };

  const handleClean = () => {
    const edge = ["init", "limit"];
    const rooms = ["env", "bedroom", "bathroom", "garage"];
    rooms.forEach((room) => {
      for (let i = 0; i <= 1; i++) {
        deleteQyParam(`${room}_${edge[i]}`);
        chgReducerRoom("", `${room}Chgd`, `${edge[i]}`);
      }
    });
  }; 

  const sliderProps = useMemo(
    () => {
      const roomsNomenclature = [
        {spanishVarName:"Ambientes", reducerVarName: "env"},
        {spanishVarName:"Dormitorios", reducerVarName: "bedroom"},
        {spanishVarName:"Baños", reducerVarName: "bathroom"},
        {spanishVarName:"Garage", reducerVarName: "garage"},
      ]
      const props = roomsNomenclature.map( room => {
        return(
          {
            chgReducerRoom:chgReducerRoom,
            handleChange:handleChange,
            room: room.spanishVarName,
            reducerVarName : room.reducerVarName,
            roomInitQyParams: searchParams.get(`${room.reducerVarName}_init`) ,
            roomLimitQyParams: searchParams.get(`${room.reducerVarName}_limit`) ,
            roomFilter:filters[room.reducerVarName],
          }
        )
      })
      return props;
    },
    [filters]
  );

  // const Sliders = () =>{
  //   const result = [];
  //   for (let i=0; i<=3; i++) {
  //     result.push(<Slider key={i} props={sliderProps[i]} />);
  //   }
  //   return(result)
  // }
  

  return (
    <>
      {/* {sliderProps && Sliders()} */}
      <Slider props={sliderProps[0]} />
      <span onClick={handleClean}>Limpiar</span>
      <ConfirmBtn handleSubmit={() => handleSubmit()} />
    </>
  );
};

export default SliderContainer;
