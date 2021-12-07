import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [defaultLang, setDefaultLang] = useState(document.documentElement.lang);

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setDefaultLang(e.target.value);
  };

  return {
    defaultLang,
    setDefaultLang,
    handleLanguage,
  };
};

export default useLanguageSelector;
