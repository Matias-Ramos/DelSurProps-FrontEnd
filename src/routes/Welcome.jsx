import { Link } from "react-router-dom"
const Welcome = () => {
  return (
    <>
    <h1>Bienvenid@</h1>
    <span>¿Qué estabas buscando?</span>
    <Link to={"/venta-inmuebles"}>
      <button>Comprar</button>
    </Link>
    <Link to={"/alquiler-inmuebles"}>
      <button>Alquilar</button>
    </Link>
    <Link to={"/emprendimientos"}>
      <button>Emprendimientos</button>
    </Link> 
    </>
  )
}

export default Welcome