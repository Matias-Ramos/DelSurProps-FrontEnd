// Backgrounds
import orangeBkg from "../../assets/backgrounds/orange-background.svg";
import blueBkg from "../../assets/backgrounds/blue-background.svg";
import turquoisBkg from "../../assets/backgrounds/turquois-background.svg";

export const getBackground = (URLpath) => {
  switch (URLpath) {
    case "/emprendimientos":
      return turquoisBkg;
    case "/alquiler_inmuebles":
      return orangeBkg;
    case "/venta_inmuebles":
      return blueBkg;
    default:
      console.error("getBackground fn at Main.jsx throws error.");
      break;
  }
};

export const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
