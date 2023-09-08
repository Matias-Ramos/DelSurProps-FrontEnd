import FormBTS from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Inputs = ({ links, handleChangeLink }) => (
  <>
    {links.map((link, index) => (
      <FormBTS.Group
        controlId={`link${index}Input`}
        key={index}
        className="imgLinksInput"
      >
        <FormBTS.Label>Imagen {index + 1}</FormBTS.Label>
        <FormBTS.Control
          type="text"
          value={link}
          placeholder="https://.."
          name="imageLinks"
          onChange={(e) => handleChangeLink(index, e.target.value)}
          required
        />
        <FormBTS.Control.Feedback type="invalid">
          *Campo mandatorio.
        </FormBTS.Control.Feedback>
      </FormBTS.Group>
    ))}
  </>
);
/****************************** */
// TypeChecking
Inputs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  handleChangeLink: PropTypes.func,
};
/****************************** */

export default Inputs;
