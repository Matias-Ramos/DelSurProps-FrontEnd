const CardLink = ({ link, eCommerceName, logo, typography }) => (
  <div className="linkOuter">
    <div className="linkInner">
      <a
        href={link}
        className="centerContent"
        aria-label={`Link que redirecciona a la publicacion de esta propiedad pero en ${eCommerceName}`}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
      >
        <img src={logo} alt={`logo de ${eCommerceName}`} />
        <img
          src={typography}
          alt={`"${eCommerceName}"`}
          className="typography"
        />
      </a>
    </div>
  </div>
);

export default CardLink;
