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
    <div>
    <h2>{ubicacion}</h2>
    <span>${precio}</span>
    </div>
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