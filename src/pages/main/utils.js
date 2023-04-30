// Backgrounds
import orangeBkg from "../../assets/backgrounds/orange-background.svg";
import blueBkg from "../../assets/backgrounds/blue-background.svg";
import turquoisBkg from "../../assets/backgrounds/turquois-background.svg";
/* background by SVGBackgrounds.com */

export const getBackground = (URLpath) => {
  switch (URLpath) {
    case "/emprendimientos":
      return turquoisBkg;
    case "/alquiler-inmuebles":
      return orangeBkg;
    case "/venta-inmuebles":
      return blueBkg;
    default:
      console.error("getBackground fn at Main.jsx throws error.");
      break;
  }
};
