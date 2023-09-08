// Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CredentialsInput from "./CredentialsInput.jsx";
import PwdAlert from "./PwdAlert.jsx";
// Fetch
import {
  cssLoginContainer,
  cssLoginRow,
  cssLoginColInput,
  cssLoginColAlert,
} from "./loginCssStyles.js";
// Hooks
import { useState } from "react";
// Fetch
import { loginCredentials } from "../../../api/fetches";
// Cookie mgmt.
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
// Typechecking
import PropTypes from "prop-types";

export {
  // Components
  Container,
  Row,
  Col,
  CredentialsInput,
  PwdAlert,
  // Fetch
  cssLoginContainer,
  cssLoginRow,
  cssLoginColInput,
  cssLoginColAlert,
  // Hooks
  useState,
  // Fetch
  loginCredentials,
  // Cookie mgmt.
  Cookies,
  jwtDecode,
  // Typechecking
  PropTypes,
};
