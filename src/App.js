import React, { Suspense } from "react";
import SerempreLogo from "./img/serempre-logo.svg";
//Tailwinds
import "./styles/output.css";

//i18n
import { useTranslation } from "react-i18next";
import LanguageSelector from "./views/components/LanguageSelector/LanguageSelector";

const App = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="min-h-screen bg-blue-900  h-full flex justify-center items-center flex-col">
        <img src={SerempreLogo} className="w-full max-w-xl	mb-8" />{" "}
        <h1 className="text-white  font-bold mb-3 text-3xl text-center">
          {t("Template title")}
        </h1>
        <p className="text-lg text-white text-center">
          {t("Welcome to React")}
        </p>
        {/* <LanguageSelector /> */}
      </div>
    </Suspense>
  );
};

export default App;
