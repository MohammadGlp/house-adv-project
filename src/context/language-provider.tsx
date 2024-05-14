import {createContext, useEffect, useState, ReactNode, useContext} from "react";
import { getLanguageDatas } from "@/locales/translateJsons.ts";

interface LanguageContextProp {
  lang: string;
  setLang: (lang: string) => void;
  dictionary: unknown;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextProp>({
  lang: "en",
  setLang: () => {},
  dictionary: null,
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<string>("en");
  const [dictionary, setDictionary] = useState<unknown>(null);

  useEffect(() => {
    const fetcheLanguageData = async () => {
      const response = await getLanguageDatas(lang);
      setDictionary(response);
    };

    fetcheLanguageData();
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, dictionary, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useTranslate = () => {
  return useContext(LanguageContext)
}