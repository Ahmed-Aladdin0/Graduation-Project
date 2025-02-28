import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          login: "Login",
          email: "Email"
        }
      },
      ar: {
        translation: {
          login: "تسجيل الدخول",
          email: "البريد الإلكتروني"
        }
      }
    },
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
