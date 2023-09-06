import {
  // BTS
  Button,
  FormBTS,
  // Components
  ImgDinamicInputs,
  LocationInput,
  PriceInput,
  CurrencyInput,
  EnvInput,
  BedroomsInput,
  BathroomsInput,
  GaragesInput,
  CoveredSurfaceInput,
  TotalSurfaceInput,
  StatusInput,
  PublicationLinkInputs,
  // Hooks
  useState,
  // API
  postData,
  // Utils
  formatCategForAPI,
  formatDataForAPI,
} from "./imports.js";

const Form = ({ category, jwtToken }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    let formData = new FormData(form),
      formDataObj = Object.fromEntries(formData.entries());

    formDataObj = formatDataForAPI(formData, formDataObj);
    const apiCategory = formatCategForAPI(category);

    postData(formDataObj, apiCategory, jwtToken).then((apiAnswer) =>
      console.log(apiAnswer)
    );
    setValidated(true);
  };

  return (
    <>
      {category != "Categoría" && (
        <FormBTS noValidate validated={validated} onSubmit={handleSubmit}>
          <LocationInput />
          <PriceInput />
          {category == "Alquiler inmueble" && <CurrencyInput />}
          <EnvInput />
          <BedroomsInput />
          <BathroomsInput />
          <GaragesInput />
          {(category === "Emprendimiento" || category === "Venta inmueble") && (
            <>
              <TotalSurfaceInput />
              <CoveredSurfaceInput />
            </>
          )}
          {category === "Emprendimiento" && <StatusInput />}
          <PublicationLinkInputs />
          {/* Image Links */}
          <ImgDinamicInputs />

          <Button variant="primary" type="submit" size="lg" id="submitForm">
            Confirmar
          </Button>
        </FormBTS>
      )}
    </>
  );
};

export default Form;
