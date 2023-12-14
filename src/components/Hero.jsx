import React from "react";
import { logo } from "../assets";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain " />
        <div className="flex content-end">
          <button type="button" className="p-3" onClick={() => changeLng("en")}>
            <p className="font-bold">EN</p>
          </button>
          <p className="p-3">/</p>
          <button type="button" className="p-3" onClick={() => changeLng("zh")}>
            <p className="font-bold">中文</p>
          </button>
        </div>
      </nav>
      <h1 className="head_text">
        {t("head_text")} <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">{t("desc")}</h2>
    </header>
  );
};

export default Hero;
