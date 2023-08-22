import Button from "react-bootstrap/Button";
const ActnBtns = ({links, addLink, removeInput}) => {
  return (
    <div id="linksActnBtns">
      <Button variant="primary" onClick={addLink}>
        +
      </Button>
      <Button
        variant="primary"
        onClick={removeInput}
        disabled={links.length <= 1}
      >
        -
      </Button>
    </div>
  );
};

export default ActnBtns;
