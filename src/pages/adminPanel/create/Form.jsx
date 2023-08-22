import Button from "react-bootstrap/Button";
import FormBTS from "react-bootstrap/Form";
import DinamicInputs from "./dinamicInputs/DinamicInputCont";
import { useState } from "react";
const Form = ({ category }) => {
  const [validated, setValidated] = useState(false);

  const sendData = async (formData) => {
    const res = await fetch("http://localhost:8080/admin/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: formData,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(form),
      formDataObj = Object.fromEntries(formData.entries());

    // saves array instead of the last value
    const imageLinksArray = formData.getAll("imageLinks");
    formDataObj.imagesInputs = imageLinksArray;
    console.log(formDataObj);
    sendData(formDataObj);
    setValidated(true);
  };

  return (
    <>
      {category != "Categoría" && (
        <FormBTS noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Location */}
          <FormBTS.Group className="formItem" controlId="locationInput">
            <FormBTS.Label>Ubicación</FormBTS.Label>
            <FormBTS.Control
              type="text"
              placeholder="Dirección, barrio"
              required
              name="location"
            />
            <FormBTS.Control.Feedback type="invalid">
              *Campo mandatorio.
            </FormBTS.Control.Feedback>
            <FormBTS.Text className="text-muted">
              De incluír barrio, separarlo con una coma{'(",")'}.
            </FormBTS.Text>
          </FormBTS.Group>

          {/* Price */}
          <FormBTS.Group className="formItem" controlId="priceInput">
            <FormBTS.Label>Precio</FormBTS.Label>
            <FormBTS.Control
              type="number"
              placeholder="$"
              required
              name="price"
            />
            <FormBTS.Control.Feedback type="invalid">
              *Campo mandatorio.
            </FormBTS.Control.Feedback>
          </FormBTS.Group>

          {/* ARS / USD */}
          {category == "Alquiler inmueble" && (
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
          )}

          {/* Env */}
          <FormBTS.Group className="formItem" controlId="envInput">
            <FormBTS.Label>Ambientes</FormBTS.Label>
            <FormBTS.Control
              type="number"
              placeholder="1, 2, 3..."
              name="env"
            />
          </FormBTS.Group>

          {/* Bedrooms */}
          <FormBTS.Group
            className="formItem"
            controlId="bedroomInput"
            name="bedroom"
          >
            <FormBTS.Label>Dormitorios</FormBTS.Label>
            <FormBTS.Control type="number" placeholder="1, 2, 3..." />
          </FormBTS.Group>

          {/* Bathrooms */}
          <FormBTS.Group
            className="formItem"
            controlId="bathroomInput"
            name="bathroom"
          >
            <FormBTS.Label>Baños</FormBTS.Label>
            <FormBTS.Control type="number" placeholder="1, 2, 3..." />
          </FormBTS.Group>

          {/* Garages */}
          <FormBTS.Group
            className="formItem"
            controlId="garageInput"
            name="garage"
          >
            <FormBTS.Label>Cocheras</FormBTS.Label>
            <FormBTS.Control type="number" placeholder="1, 2, 3..." />
          </FormBTS.Group>

          {category === "Emprendimiento" ||
            (category === "Venta inmueble" && (
              <>
                {/* Total Surface */}
                <FormBTS.Group
                  className="formItem"
                  controlId="totalSurfaceInput"
                >
                  <FormBTS.Label>Superficie total</FormBTS.Label>
                  <FormBTS.Control
                    type="number"
                    placeholder="100, 200..."
                    name="total_surface"
                  />
                </FormBTS.Group>

                {/* Covered Surface */}
                <FormBTS.Group
                  className="formItem"
                  controlId="coveredSurfaceInput"
                >
                  <FormBTS.Label>Superficie cubierta</FormBTS.Label>
                  <FormBTS.Control
                    type="number"
                    placeholder="100, 200..."
                    name="covered_surface"
                  />
                </FormBTS.Group>
              </>
            ))}

          {/* Status */}
          {category === "Emprendimiento" && (
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
          )}

          <div className="formItem">
            {/* Link ML */}
            <FormBTS.Group controlId="MLInput">
              <FormBTS.Label>Link Mercado Libre</FormBTS.Label>
              <FormBTS.Control
                type="text"
                placeholder="https://..."
                name="link_ml"
              />
            </FormBTS.Group>

            {/* Link Zonaprop */}
            <FormBTS.Group
              controlId="ZonapropInput"
              style={{ marginTop: "2rem" }}
            >
              <FormBTS.Label>Link Zonaprop</FormBTS.Label>
              <FormBTS.Control
                type="text"
                placeholder="https://..."
                name="link_zonaprop"
              />
            </FormBTS.Group>

            {/* Link Argenprop */}
            <FormBTS.Group
              controlId="ArgenpropInput"
              style={{ marginTop: "2rem" }}
            >
              <FormBTS.Label>Link Argenprop</FormBTS.Label>
              <FormBTS.Control
                type="text"
                placeholder="https://..."
                name="link_argenprop"
              />
            </FormBTS.Group>
          </div>

          {/* Image Links */}
          <DinamicInputs />

          <Button variant="primary" type="submit" size="lg" id="submitForm">
            Confirmar
          </Button>
        </FormBTS>
      )}
    </>
  );
};

export default Form;
