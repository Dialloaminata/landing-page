import { createContext, FC, useContext, useState } from "react";
import { DEFAULT_LANG } from "../utils/constants";

type langType = "en" | "fr";

const defaultLang: langType = DEFAULT_LANG;

const context = createContext<{ lang: langType; translate: (args: { en: string; fr?: string }) => string }>({
  lang: defaultLang,
  translate: (args): string => "",
});

export const Localization: FC<{ initialLang: "en" | "fr" }> = ({ children, initialLang, ...rest }) => {
  const [lang, setLang] = useState<langType>(initialLang);

  function translate(args: { en: string; fr?: string }) {
    return args[lang] || args["en"];
  }

  return <context.Provider value={{ lang, translate }}>{children}</context.Provider>;
};

export const useLang = () => {
  return useContext(context).lang;
};

export const useTranslation = () => {
  return useContext(context).translate;
};
