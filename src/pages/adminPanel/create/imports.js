// BTS
import Button from "react-bootstrap/Button";
import FormBTS from "react-bootstrap/Form";
// Components
import ImgDinamicInputs from "./inputs/imgDinamicInputs/ImgDinamicInputCont.jsx";
import LocationInput from "./inputs/locationInput/LocationInput.jsx";
import PriceInput from "./inputs/priceInput/PriceInput.jsx";
import CurrencyInput from "./inputs/currencyInput/CurrencyInput.jsx";
import EnvInput from "./inputs/envInput/EnvInput.jsx";
import BedroomsInput from "./inputs/bedroomsInput/BedroomsInput.jsx";
import BathroomsInput from "./inputs/bathroomsInput/BathroomsInput.jsx";
import GaragesInput from "./inputs/garagesInput/GaragesInput.jsx";
import CoveredSurfaceInput from "./inputs/coveredSurfaceInput/CoveredSurfaceInput.jsx";
import TotalSurfaceInput from "./inputs/totalSurfaceInput/TotalSurfaceInput.jsx";
import StatusInput from "./inputs/statusInput/StatusInput.jsx";
import PublicationLinkInputs from "./inputs/publicationLinkInputs/PublicationLinkInputs.jsx";
import Modal from "./Modal.jsx";

// Hooks
import { useState } from "react";
// API
import { postData } from "../../../api/fetches.js";
// utils
import { formatCategForAPI, formatDataForAPI } from "./utils.js";
export{
    // BTS
    Button,
    FormBTS,
    // Components
    ImgDinamicInputs,
    LocationInput,
    PriceInput,
    CurrencyInput,
    EnvInput,
    BedroomsInput,
    BathroomsInput,
    GaragesInput,
    CoveredSurfaceInput,
    TotalSurfaceInput,
    StatusInput,
    PublicationLinkInputs,
    Modal,
    // Hooks
    useState,
    // API
    postData,
    // Utils
    formatCategForAPI, 
    formatDataForAPI,
}