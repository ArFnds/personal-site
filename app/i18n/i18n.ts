import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import Cookies from "js-cookie";

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
	name: "cookie",
	lookup(options) {
		return Cookies.get("lang");
	},
});

i18n
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			fr: { translation: fr },
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
