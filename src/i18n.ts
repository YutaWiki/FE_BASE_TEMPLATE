import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from "./interface/constants/languages";
import { en } from './i18n/en';
import { vi } from './i18n/vi';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    supportedLngs: LANGUAGES.map(el => el.code),
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
  });

export const changeLanguage = (lng:string) => {
  i18n.changeLanguage(lng);
  console.log(i18n.language);
  
};

export default i18n;
