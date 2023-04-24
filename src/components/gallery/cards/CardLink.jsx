const CardLink = ({link, eCommerceName, img}) => {
  return (
    <div className="linkDiv">
      <a
        href={link}
        className="centerContent"
        aria-label={`Link que redirecciona a la publicacion de esta propiedad pero en ${eCommerceName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt="logo de MercadoLibre" />
        {eCommerceName!=="Mercado Libre" && <span>{eCommerceName}</span>}
      </a>
    </div>
  );
};

export default CardLink;
