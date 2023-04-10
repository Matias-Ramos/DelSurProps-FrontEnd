import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import BuildStatusFilter from "../buildStatus/BuildStatusFilter.jsx"
import SurfaceFilterContainer from "../surface/SurfaceFilterContainer.jsx";
import { useContext, useReducer, useMemo } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
import { filterModifier, filterStructure } from "./reducerUtils.js";
import { useLocation } from 'react-router-dom';
import Navbar from "../navbar/Navbar.jsx";
const FiltersContainer = () => {
  const { searchQyParams, updateQyParams, deleteQyParam } = useContext(queryCtxt);
  const [ filters, dispatch ] = useReducer(filterModifier, filterStructure);
  const URLpath = useLocation().pathname;
  const filtersProps = useMemo(() => {
    return(
      {
        filters : filters,
        dispatch : dispatch,
        updateQyParams : updateQyParams,
        deleteQyParam : deleteQyParam,
        searchQyParams : searchQyParams,
      }
    )
  })
  return (
    <>
    <Navbar filtersProps={filtersProps} />
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          border: "1px solid blue",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <LocationFilter
          props={filtersProps}
        />
      </div>
      <div
        style={{
          border: "1px solid green",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <PriceFilter
        props={filtersProps}/>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <SliderContainer
        props={filtersProps}
        />

      </div>

      {(URLpath === "/venta-inmuebles" || URLpath === "/emprendimientos") && (
        <SurfaceFilterContainer
        props={filtersProps}
        />

      )}
      {URLpath === "/emprendimientos" && (
        <BuildStatusFilter
        props={filtersProps}
        />
      )}
    </div>
    </>
  );
};

export default FiltersContainer;
