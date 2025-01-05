import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ru from "./locales/ru.json";

import * as dateFnsLocales from "date-fns/locale";

export const availableLanguages = ["en", "fr", "ru"] as const;

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
			ru: { translation: ru },
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

const dateLocales = {
	en: dateFnsLocales.enUS,
	fr: dateFnsLocales.fr,
	ru: dateFnsLocales.ru,
};

export const dateLocale = (i18nInstance?: typeof i18n) => {
	const instance = i18nInstance || i18n;
	const lang = instance.language as (typeof availableLanguages)[number];
	return dateLocales[lang];
};

export default i18n;
