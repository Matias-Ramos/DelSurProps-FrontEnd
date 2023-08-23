import FormBTS from "react-bootstrap/Form";

const CurrencyInput = () => (
    <div className="formItem">
    <FormBTS.Label>Moneda</FormBTS.Label>
    <FormBTS.Check
      type="radio"
      label="ARS"
      id="ARS"
      name="currency"
      value="ars"
    />
    <FormBTS.Check
      type="radio"
      name="currency"
      label="USD"
      id="USD"
      value="usd"
      defaultChecked
    />
  </div>
)


export default CurrencyInput