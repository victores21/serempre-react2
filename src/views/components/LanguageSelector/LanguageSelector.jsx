import React, { useState } from "react";

// import useControllers from "../../../controllers";
import useComponentHooks from "../../../controllers/componentsHooks";
import { StyledLanguageSelector } from "./LanguageSelector.styles";

const LanguageSelector = () => {
  // Controllers Hooks
  // const { useComponentsHooks } = useControllers();
  const { useLanguageSelector } = useComponentHooks();
  const { defaultLang, handleLanguage } = useLanguageSelector();

  return (
    <StyledLanguageSelector
      onChange={handleLanguage}
      value={defaultLang}
      className="w-96 h-8 rounded mt-8 max-w-full"
    >
      <option value="en">English </option>
      <option value="es">Español</option>
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
