import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const availableLanguages = ["en", "fr"];

const languageDetector = new LanguageDetector(undefined, {
	order: ["path"],
});
languageDetector.addDetector({
	name: "path",
	lookup(options) {
		return window.location.pathname.split("/")[1];
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
