import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"

const languages = ["en", "sin"]

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallback: "en",
    debug: true,
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  })

export default i18n
