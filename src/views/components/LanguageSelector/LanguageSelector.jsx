import React, { useState } from "react";

import useControllers from "../../../controllers";

const LanguageSelector = () => {
  //Dentro de controllers

  const { useComponentControllers } = useControllers();
  const { useLanguageSelector } = useComponentControllers();
  const { defaultLang, handleLanguage } = useLanguageSelector();

  return (
    <select
      onChange={handleLanguage}
      value={defaultLang}
      className="w-96 h-8 rounded mt-8 max-w-full"
    >
      <option value="en">English </option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;
