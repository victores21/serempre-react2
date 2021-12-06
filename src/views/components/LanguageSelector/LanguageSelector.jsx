import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const [defaultLang, setDefaultLang] = useState("");

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    setDefaultLang(document.documentElement.lang);
  }, [defaultLang]);

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
