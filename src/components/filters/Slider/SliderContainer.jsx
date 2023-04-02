import ConfirmBtn from "../ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
import { useMemo, useEffect } from "react";

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
  const handleSubmit = (roomType) => {
    for (const edge in filters[roomType]) {
      filters[roomType]
       ? updateQyParams(`${roomType}_${edge}`, filters[roomType][edge])
       : deleteQyParam(`${roomType}_${edge}`)
    }
  };
  const handleClean = (roomType) => {
    const edge = ['init', 'limit'];
    for(let i=0; i<=1; i++){
      deleteQyParam(`${roomType}_${edge[i]}`);
      chgReducerRoom("", `${room}Chgd`, `${edge[i]}`);
    }
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
            handleClean:handleClean,
            room: room.spanishVarName,
            roomInitQyParams: searchParams.get(`${room.reducerVarName}_limit`) ,
            roomLimitQyParams:searchParams.get(`${room.reducerVarName}_init`) ,
            roomFilter:filters[room.reducerVarName],
          }
        )
      })
      return props;
    },
    []
  );

  const Sliders = () =>{
    return(
      <>
        <Slider props={sliderProps[0]}/>
        <Slider props={sliderProps[1]}/>
        <Slider props={sliderProps[2]}/>
        <Slider props={sliderProps[3]}/>
      </>
    )
  }

  return (
    <>
    {
      sliderProps && <Slider props={sliderProps[0]}/>
    }
      {/* <Slider
      props={sliderProps[0]}
      /> */}
      {/* <Slider
      room={"Dormitorios"}
      chgReducerRoom = {chgReducerRoom}
      handleChange = {handleChange}
      handleClean= {handleClean}
      roomInitQyParams = { searchParams.get("bedroom_init") }
      roomLimitQyParams = { searchParams.get("bedroom_limit") }
      roomFilter = {filters.bedr}
      />
      <Slider
      room={"Baños"} 
      chgReducerRoom = {chgReducerRoom}
      handleChange = {handleChange}
      handleClean= {handleClean}
      roomInitQyParams = { searchParams.get("bathroom_init") }
      roomLimitQyParams = { searchParams.get("bathroom_limit") }
      roomFilter = {filters.bathr}/>
      <Slider
      room={"Garage"} 
      chgReducerRoom = {chgReducerRoom}
      handleChange = {handleChange}
      handleClean= {handleClean}
      roomInitQyParams = { searchParams.get("garage_init") }
      roomLimitQyParams = { searchParams.get("garage_limit") }
      roomFilter = {filters.garage}/> */}
      <ConfirmBtn handleSubmit = {handleSubmit}/>
    </>
  );
};

export default SliderContainer;
