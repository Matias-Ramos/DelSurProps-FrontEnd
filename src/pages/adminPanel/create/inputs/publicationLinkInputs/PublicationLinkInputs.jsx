import FormBTS from "react-bootstrap/Form";

const PublicationLinkInputs = () => (
  <div className="formItem">
    {/* Link ML */}
    <FormBTS.Group controlId="MLInput">
      <FormBTS.Label>Link Mercado Libre</FormBTS.Label>
      <FormBTS.Control type="text" placeholder="https://..." name="link_ml" />
    </FormBTS.Group>

    {/* Link Zonaprop */}
    <FormBTS.Group controlId="ZonapropInput" style={{ marginTop: "2rem" }}>
      <FormBTS.Label>Link Zonaprop</FormBTS.Label>
      <FormBTS.Control
        type="text"
        placeholder="https://..."
        name="link_zonaprop"
      />
    </FormBTS.Group>

    {/* Link Argenprop */}
    <FormBTS.Group controlId="ArgenpropInput" style={{ marginTop: "2rem" }}>
      <FormBTS.Label>Link Argenprop</FormBTS.Label>
      <FormBTS.Control
        type="text"
        placeholder="https://..."
        name="link_argenprop"
      />
    </FormBTS.Group>
  </div>
);

export default PublicationLinkInputs;
