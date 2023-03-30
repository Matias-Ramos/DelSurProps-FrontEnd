import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import SurfaceFilter from "../surface/SurfaceFilter.jsx";
import BuildStatusFilter from "../buildStatus/BuildStatusFilter.jsx"
import { useContext, useReducer } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
import { filterModifier, filterStructure } from "./reducerUtils.js";
import { useLocation } from 'react-router-dom';

const FiltersContainer = () => {
  const { searchParams, updateQyParams, deleteQyParams, deleteQyParam } = useContext(queryCtxt);
  const [ filters, dispatch ] = useReducer(filterModifier, filterStructure);
  const URLpath = useLocation().pathname;
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ border: "1px solid blue", padding: "2rem", display: "inline-block", }} >
        <LocationFilter
          updateQyParams={updateQyParams}
          deleteQyParams={deleteQyParams}
          dispatch={dispatch}
          filters={filters}
          locationQyParams={searchParams.get("location")}
        />
      </div>
      <div style={{ border: "1px solid green", padding: "2rem", display: "inline-block",}}>
        <PriceFilter 
          updateQyParams={updateQyParams}
          deleteQyParam={deleteQyParam}
          dispatch={dispatch}
          filters={filters}
          priceInitQyParams={searchParams.get("price_init")}
          priceLimitQyParams={searchParams.get("price_limit")}
         />
      </div>
      <div style={{ border: "1px solid black", padding: "2rem", display: "inline-block", }} >
        <SliderContainer updateQyParams={updateQyParams} />
      </div>

      {
        (URLpath==="/venta-inmuebles" || URLpath==="/emprendimientos") &&
        <SurfaceFilter updateQyParams={updateQyParams} />
      }
      {
        URLpath==="/emprendimientos" &&
        <BuildStatusFilter updateQyParams={updateQyParams} />
      }

    </div>
  );
};

export default FiltersContainer;
