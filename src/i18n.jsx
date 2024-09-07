import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en", // Agar hech qanday til topilmasa 'en'ga o'tadi
        debug: true, // Brauzerda konsolga xatolarni chiqarib beradi
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            uz: { translation: uz },
        },
        interpolation: {
            escapeValue: false, // Xavfsizlik uchun
        },
    });

export default i18n;
