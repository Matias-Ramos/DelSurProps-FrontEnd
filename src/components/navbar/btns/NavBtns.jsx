import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";


const NavBtns = () => {
  const URLpath = useLocation().pathname;
  const getVariant = (btnCat) =>
    btnCat === URLpath ? "contained" : "outlined";

  return (
    <ButtonGroup aria-label="outlined primary button group">
        <Link to={"/alquiler-inmuebles"}>
            <Button variant={getVariant("/alquiler-inmuebles")}>Alquilar</Button>
        </Link>
        <Link to={"/venta-inmuebles"}>
            <Button variant={getVariant("/venta-inmuebles")}>Comprar</Button>
        </Link>
        <Link to={"/emprendimientos"}>
            <Button variant={getVariant("/emprendimientos")}>Emprendimientos</Button>
        </Link>
    </ButtonGroup>
  );
};

export default NavBtns;
