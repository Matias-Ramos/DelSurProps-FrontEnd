// Components
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Icons
import orangeDot from "../../../assets/icons/orange-circle.svg";
import turquoiseDot from "../../../assets/icons/turquoise-circle.svg";
import blueDot from "../../../assets/icons/blue-circle.svg";
// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectLabels({ URLpath = "/" }) {

  /****************************** */
  // Functions

  
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const getProperTag = (thisPath, category) => {
    return URLpath === thisPath ? (
      <h1 className="menuItem">{category}</h1>
    ) : (
      <span className="menuItem">{category}</span>
    );
  };
  /* in case there is a pre-stablished URLpath, 
  this effect updates select value with it on first render.*/
  useEffect(() => {
    switch (URLpath) {
      case "/alquiler-inmuebles":
        setCategory("alquiler-inmuebles");
        break;
      case "/venta-inmuebles":
        setCategory("venta-inmuebles");
        break;
      case "/emprendimientos":
        setCategory("emprendimientos");
        break;
      default: // '/', Welcome.jsx
        break;
    }
  }, []);


  /****************************** */
  // Rendering

  return (
    <FormControl
      sx={{ m: 1, minWidth: 190, backgroundColor: "#f8f9fa", zIndex: 2 }}
      id="select"
    >
      <Select
        value={category}
        onChange={handleChange}
        displayEmpty
        sx={{ borderRadius: 20 }}
        inputProps={{
          "aria-label":
            "Grupo de botones para definir si mostrar propiedades en venta, en alquiler o emprendimientos",
        }}
      >
        
        <MenuItem
          value={"venta-inmuebles"}
          onClick={() => navigate("/venta-inmuebles")}
        >
          <img src={blueDot} className="circleIcon" alt="Ícono decorativo" />
          {getProperTag("/venta-inmuebles", "Comprar")}
        </MenuItem>

        <MenuItem
          value={"alquiler-inmuebles"}
          onClick={() => navigate("/alquiler-inmuebles")}
        >
          <img src={orangeDot} className="circleIcon" alt="Ícono decorativo" />
          {getProperTag("/alquiler-inmuebles", "Alquilar")}
        </MenuItem>

        <MenuItem
          value={"emprendimientos"}
          onClick={() => navigate("/emprendimientos")}
        >
          <img src={turquoiseDot} className="circleIcon" alt="Ícono decorativo"/>
          {getProperTag("/emprendimientos", "Emprendimientos")}
        </MenuItem>
      </Select>
    </FormControl>
  );
}
