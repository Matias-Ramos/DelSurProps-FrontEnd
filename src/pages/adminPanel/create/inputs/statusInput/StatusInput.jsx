import FormBTS from "react-bootstrap/Form";

const StatusInput = () => (
  <div className="formItem">
    <FormBTS.Label>Status</FormBTS.Label>
    <FormBTS.Check
      type="radio"
      name="status"
      label="En construcción"
      value="in_progress"
      id="inProgress"
    />
    <FormBTS.Check
      type="radio"
      name="status"
      label="En pozo"
      value="pozo"
      id="Pozo"
      defaultChecked
    />
  </div>
);

export default StatusInput;
