import LocationFilter2 from "../location/LocationFilter2.jsx"
const Navbar = ({filtersProps}) => {
    
  return (
    <>
    <button id="btnLocation">Ubicación</button>
    <LocationFilter2 filtersProps={filtersProps}/>
    </>
  )
}

export default Navbar