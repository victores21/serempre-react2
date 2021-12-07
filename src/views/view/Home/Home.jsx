import React, { Suspense } from "react";
import SerempreLogo from "../../../assets/img/serempre-logo.svg";
import useComponents from "../../components/index";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const { LanguageSelector } = useComponents();

  return (
    <Suspense fallback="loading">
      <div className="min-h-screen bg-blue-900  h-full flex justify-center items-center flex-col px-3">
        <img src={SerempreLogo} className="w-full max-w-xl	mb-8" />{" "}
        <h1 className="text-white  font-bold mb-3 text-3xl text-center">
          {t("Template title")}
        </h1>
        <p className="text-lg text-white text-center">
          {t("Welcome to React")}
        </p>
        <p className="text-lg text-white text-center">
          Enviroment Variable <b>{process.env.API_KEY}</b>
        </p>
        <LanguageSelector />
      </div>
    </Suspense>
  );
};
