const CardTxt = ({building:{
  ubicacion,
  precio,
  ambientes,
  baños,
  dormitorios,
  garage,
}}) => {
  return (
    <>
    <h2>{ubicacion}</h2>
    <span>${precio}</span>
    <ul>
        <li>{ambientes} Ambientes</li>
        <li>{dormitorios} Dormitorios</li>
        <li>{baños} Baños</li>
        <li>{garage} Garage</li>
    </ul>
    </>
  )
}

export default CardTxt