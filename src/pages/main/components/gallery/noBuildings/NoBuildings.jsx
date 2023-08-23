import searchFilterIcon from "../../../../../assets/icons/search-filter-icon.svg";

function NoBuildings() {
  return (
    <div id="noBuildings">
      <img
        src={searchFilterIcon}
        alt="ícono de filtro de búsqueda."
      />
      En este momento no tenemos propiedades con el criterio de búsqueda seleccionado. <br />
      Intenta modificar los filtros.
    </div>
  );
}

export default NoBuildings;
