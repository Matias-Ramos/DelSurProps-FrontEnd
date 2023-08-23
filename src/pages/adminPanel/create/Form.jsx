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
    getData,
    postData,
} from "./imports.js";

const Form = ({ category }) => {
  const [validated, setValidated] = useState(false);

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
    postData(formDataObj).then(apiAnswer => console.log(apiAnswer));
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
          {category === "Emprendimiento" || category === "Venta inmueble" && (
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
