// Hooks
import { useState } from "react";
// Components
import Inputs from "./Inputs.jsx";
import ActnBtns from "./ActnBtns.jsx";

const DinamicInputs = () => {

  //********************
  // Value mgmt.
  const [links, setLinks] = useState([""]); // Initial state with one input field
  const handleChangeLink = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  //********************
  // DOM elements mgmt.
  const addLink = () => {
    setLinks([...links, ""]);
  };
  const removeInput = () => {
    if (links.length > 1) {
      const updatedLinks = links.slice(0, links.length - 1);
      setLinks(updatedLinks);
    }
  };


  return (
    <div className="formItem" id="dinamicInputs">
      <Inputs links={links} handleChangeLink={handleChangeLink} />
      <ActnBtns links={links} addLink={addLink} removeInput={removeInput}/>
    </div>
  );
};

export default DinamicInputs;
