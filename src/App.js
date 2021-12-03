import React, { Suspense } from "react";

//Tailwinds
import "./styles/output.css";

//i18n
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Suspense fallback="loading">
      <h1 className="text-red-400">React App - Serempres</h1>
      <p>{t("Welcome to React")}</p>

      <select onChange={handleLanguage}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </Suspense>
  );
};

export default App;
