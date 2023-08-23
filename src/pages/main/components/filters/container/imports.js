// Components
import LocationFilter from "../location/LocationFilter.jsx";
import PriceContainer from "../price/PriceContainer.jsx";
import SlidersContainer from "../rooms/SlidersContainer.jsx";
import BuildingStatusFilter from "../buildStatus/BuildingStatusFilter.jsx";
import SurfaceFilterContainer from "../surface/SurfaceFilterContainer.jsx";
import CleanBtn from "../../filters/buttons/CleanBtn.jsx";
import Dropdown from "./Dropdown.jsx";
// Hooks
import { useContext, useReducer, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { queryCtxt } from "../../../../../context/QyParamsCtxt.jsx";
import { filterModifier, defaultFilterValues } from "./reducerUtils.js";
import useMediaQuery from "@mui/material/useMediaQuery";
// Bts
import { Container, Nav, Navbar } from "react-bootstrap";
// Animation
import { motion } from "framer-motion";
import getFiltersVariant from "./variants.js";
// TypeChecking
import PropTypes from "prop-types"

export {
  // Components
  LocationFilter,
  PriceContainer,
  SlidersContainer,
  BuildingStatusFilter,
  SurfaceFilterContainer,
  CleanBtn,
  Dropdown,
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
  // Animation
  motion,
  getFiltersVariant,
  // TypeChecking
  PropTypes,
};
