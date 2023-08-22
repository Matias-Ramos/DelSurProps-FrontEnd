import FormBTS from "react-bootstrap/Form";
const Inputs = ({ links, handleChangeLink }) => {
  return (
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
};

export default Inputs;
