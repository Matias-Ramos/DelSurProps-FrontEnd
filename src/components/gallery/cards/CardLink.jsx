import PropTypes from "prop-types";

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
/****************************** */
// TypeChecking
CardLink.propTypes = {
  imgUrl: PropTypes.string,
  link: PropTypes.string,
  eCommerceName: PropTypes.string,
  logo: PropTypes.string,
  typography: PropTypes.string,
};
/****************************** */
export default CardLink;
