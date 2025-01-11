import * as dateFnsLocales from "date-fns/locale";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import ru from "./locales/ru";

export const availableLanguages = ["en", "fr", "ru", "es"] as const;
const dateLocales = {
	en: dateFnsLocales.enUS,
	fr: dateFnsLocales.fr,
	ru: dateFnsLocales.ru,
	es: dateFnsLocales.es,
};

const languageDetector = new LanguageDetector(undefined, {
	order: ["path"],
});
languageDetector.addDetector({
	name: "path",
	lookup(_) {
		return window.location.pathname.split("/")[1];
	},
});

export const dateLocale = (i18nInstance?: typeof i18n) => {
	const instance = i18nInstance || i18n;
	const lang = instance.language as (typeof availableLanguages)[number];
	return dateLocales[lang];
};

i18n
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			fr: { translation: fr },
			ru: { translation: ru },
			es: { translation: es },
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
