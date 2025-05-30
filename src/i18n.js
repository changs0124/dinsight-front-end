import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { NAME_SPACE } from './constants/nameSpace';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ko",
        supportedLngs: ["en", "ko"],
        lng: localStorage.getItem("i18nextLng") || "ko",
        ns: NAME_SPACE,
        backend: {
            // ✅ 번역 JSON 파일 위치 설정
            loadPath: "/local/{{lng}}/{{ns}}.json"
        },
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;
